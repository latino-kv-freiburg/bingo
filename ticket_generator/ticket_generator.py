import tkinter as tk
from tkinter import ttk, messagebox
import json
from datetime import datetime
import os
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.utils import ImageReader
import pandas as pd
import xlsxwriter
import barcode
from barcode.writer import ImageWriter
from io import BytesIO

class TicketGenerator:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Bingo Ticket Generator")
        self.root.geometry("1200x800")  # Increased window size
        self.root.resizable(True, True)  # Allow resizing if needed
        
        # Load or initialize ticket counter and list
        self.load_ticket_data()
        
        # Create main container
        container = ttk.Frame(self.root, padding="10")
        container.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Create left frame for form
        main_frame = ttk.Frame(container, padding="10")
        main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Create right frame for email text
        email_frame = ttk.Frame(container, padding="10")
        email_frame.grid(row=0, column=1, sticky=(tk.W, tk.E, tk.N, tk.S), padx=(20, 0))
        
        # Email Text
        ttk.Label(email_frame, text="Email Template", font=('Helvetica', 12, 'bold')).grid(row=0, column=0, pady=10)
        self.email_text = tk.Text(email_frame, width=60, height=35)  # Increased size
        self.email_text.grid(row=1, column=0, pady=5, sticky=(tk.W, tk.E, tk.N, tk.S))
        
        # Configure email frame to expand
        email_frame.grid_columnconfigure(0, weight=1)
        email_frame.grid_rowconfigure(1, weight=1)
        
        # Buyer Information
        ttk.Label(main_frame, text="Buyer Information", font=('Helvetica', 12, 'bold')).grid(row=0, column=0, columnspan=2, pady=10)
        
        ttk.Label(main_frame, text="Name:").grid(row=1, column=0)
        self.name_var = tk.StringVar()
        ttk.Entry(main_frame, textvariable=self.name_var, width=40).grid(row=1, column=1, pady=5)
        
        ttk.Label(main_frame, text="Email:").grid(row=2, column=0)
        self.email_var = tk.StringVar()
        ttk.Entry(main_frame, textvariable=self.email_var, width=40).grid(row=2, column=1, pady=5)
        
        # Ticket Information
        ttk.Label(main_frame, text="Ticket Information", font=('Helvetica', 12, 'bold')).grid(row=3, column=0, columnspan=2, pady=10)
        
        ttk.Label(main_frame, text="Ticket Type:").grid(row=4, column=0)
        self.ticket_type_var = tk.StringVar(value="Early Bird")
        ttk.Radiobutton(main_frame, text="Early Bird (12€)", variable=self.ticket_type_var, value="Early Bird").grid(row=4, column=1, sticky=tk.W)
        ttk.Radiobutton(main_frame, text="General Entry (15€)", variable=self.ticket_type_var, value="General Entry").grid(row=5, column=1, sticky=tk.W)
        
        ttk.Label(main_frame, text="Quantity:").grid(row=6, column=0)
        self.quantity_var = tk.IntVar(value=1)
        ttk.Spinbox(main_frame, from_=1, to=8, textvariable=self.quantity_var, width=5).grid(row=6, column=1, sticky=tk.W, pady=5)
        
        ttk.Label(main_frame, text="Extra Cards:").grid(row=7, column=0)
        self.extras_var = tk.IntVar(value=0)
        ttk.Spinbox(main_frame, from_=0, to=20, textvariable=self.extras_var, width=5).grid(row=7, column=1, sticky=tk.W, pady=5)
        
        # Payment Information
        ttk.Label(main_frame, text="Payment Information", font=('Helvetica', 12, 'bold')).grid(row=8, column=0, columnspan=2, pady=10)
        
        ttk.Label(main_frame, text="Payment Method:").grid(row=9, column=0)
        self.payment_method_var = tk.StringVar(value="PayPal")
        payment_methods = [
            ("PayPal", "PayPal"),
            ("Bank Transfer", "Bank Transfer"),
            ("Guest", "Guest"),
            ("Pays at Event", "Pays at Event")
        ]
        current_row = 9
        for method, value in payment_methods:
            ttk.Radiobutton(main_frame, text=method, variable=self.payment_method_var, value=value).grid(row=current_row, column=1, sticky=tk.W)
            current_row += 1

        # Additional Information
        ttk.Label(main_frame, text="Additional Information", font=('Helvetica', 12, 'bold')).grid(row=current_row, column=0, columnspan=2, pady=10)
        
        self.additional_info_var = tk.StringVar()
        ttk.Entry(main_frame, textvariable=self.additional_info_var, width=40).grid(row=current_row + 1, column=0, columnspan=2, pady=5)
        
        # Buttons
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=12, column=0, columnspan=2, pady=20)
        
        ttk.Button(button_frame, text="Generate Ticket", command=self.generate_ticket).pack(side=tk.LEFT, padx=5)
        ttk.Button(button_frame, text="View Ticket List", command=self.show_ticket_list).pack(side=tk.LEFT, padx=5)
        
        # Status Label
        self.status_var = tk.StringVar()
        ttk.Label(main_frame, textvariable=self.status_var, wraplength=400).grid(row=13, column=0, columnspan=2, pady=10)
        
        self.root.mainloop()
    
    def load_ticket_data(self):
        try:
            with open('ticket_data.json', 'r') as f:
                data = json.load(f)
                self.ticket_counter = data.get('counter', 0)
        except FileNotFoundError:
            self.ticket_counter = 0
        
        try:
            self.tickets_df = pd.read_excel('tickets.xlsx')
        except (FileNotFoundError, ValueError):
            self.tickets_df = pd.DataFrame(columns=[
                'serial_number', 'date', 'buyer_name', 'email', 'ticket_type',
                'quantity', 'extra_cards', 'amount', 'payment_method', 'additional_info'
            ])
    
    def save_ticket_data(self):
        with open('ticket_data.json', 'w') as f:
            json.dump({
                'counter': self.ticket_counter
            }, f)
        
        # Create Excel file with formatting
        workbook = xlsxwriter.Workbook('tickets.xlsx', {'nan_inf_to_errors': True})
        worksheet = workbook.add_worksheet()
        
        # Add formats for different payment methods
        formats = {
            'PayPal': workbook.add_format({
                'bg_color': '#ADD8E6',  # Light blue
                'border': 1
            }),
            'Bank Transfer': workbook.add_format({
                'bg_color': '#90EE90',  # Light green
                'border': 1
            }),
            'Guest': workbook.add_format({
                'bg_color': '#D3D3D3',  # Light grey
                'border': 1
            }),
            'Pays at Event': workbook.add_format({
                'bg_color': '#FFFFE0',  # Light yellow
                'border': 1
            })
        }
        
        # Write headers
        headers = ['Serial Number', 'Date', 'Buyer Name', 'Email', 'Ticket Type', 
                  'Quantity', 'Extra Cards', 'Amount', 'Payment Method', 'Additional Info']
        for col, header in enumerate(headers):
            worksheet.write(0, col, header)
        
        # Write data with formatting
        for row, ticket in enumerate(self.tickets_df.itertuples(), start=1):
            data = [
                ticket.serial_number,
                ticket.date,
                ticket.buyer_name,
                ticket.email,
                ticket.ticket_type,
                ticket.quantity,
                ticket.extra_cards,
                ticket.amount if hasattr(ticket, 'amount') else '',  # Add amount in correct position
                ticket.payment_method,
                ticket.additional_info if hasattr(ticket, 'additional_info') else ''
            ]
            
            row_format = formats.get(ticket.payment_method, workbook.add_format())
            for col, value in enumerate(data):
                worksheet.write(row, col, value, row_format)
        
        # Adjust column widths
        for col in range(len(headers)):
            worksheet.set_column(col, col, 15)
        worksheet.set_column(2, 2, 25)  # Wider column for buyer name
        worksheet.set_column(3, 3, 30)  # Wider column for email
        worksheet.set_column(8, 8, 40)  # Wider column for additional info
        
        workbook.close()
    
    def generate_serial_number(self):
        # Calculate letter code from counter (AA, AB, AC, etc.)
        counter = self.ticket_counter
        first = chr(ord('A') + (counter // 26))
        second = chr(ord('A') + (counter % 26))
        letter_code = first + second
        
        serial = f"251025-{counter:03d}{letter_code}"
        
        # Update counter for the next ticket
        self.ticket_counter += 1
        
        return serial
    
    def generate_ticket(self):
        # Validate inputs
        if not self.name_var.get() or not self.email_var.get():
            messagebox.showerror("Error", "Please fill in name and email fields.")
            return
        
        buyer_name = self.name_var.get()
        quantity = self.quantity_var.get()
        extras = self.extras_var.get()
        ticket_type = self.ticket_type_var.get()
        
        # Create tickets directory with full permissions
        tickets_dir = "tickets"
        try:
            if not os.path.exists(tickets_dir):
                os.makedirs(tickets_dir, mode=0o777, exist_ok=True)
            
            generated_files = []
            
            # Generate individual ticket PDFs
            for i in range(quantity):
                serial_number = self.generate_serial_number()
                pdf_filename = os.path.join(
                    tickets_dir, 
                    f"Bingo-Pachanguero-2025_{buyer_name.replace(' ', '-')}_{serial_number}.pdf"
                )
                self.create_ticket_pdf(
                    pdf_filename,
                    serial_number,
                    buyer_name,
                    ticket_type,
                    is_extra_card=False
                )
                generated_files.append(pdf_filename)
            
            # Generate extra cards PDF if needed
            if extras > 0:
                extra_pdf_filename = os.path.join(
                    tickets_dir,
                    f"Bingo-Pachanguero-2025_{buyer_name.replace(' ', '-')}_Additional-cards.pdf"
                )
                self.create_ticket_pdf(
                    extra_pdf_filename,
                    None,  # No serial number for extra cards
                    buyer_name,
                    f"{extras}x Additional Bingo Cards",
                    is_extra_card=True
                )
                generated_files.append(extra_pdf_filename)
        except PermissionError:
            messagebox.showerror(
                "Error",
                "Permission denied when creating ticket. Please make sure you have write access to the tickets folder."
            )
            return
        except Exception as e:
            messagebox.showerror("Error", f"An error occurred while generating the ticket: {str(e)}")
            return
        
        # Calculate amount
        ticket_price = 12 if self.ticket_type_var.get() == "Early Bird" else 15
        extra_price = 4 if self.ticket_type_var.get() == "Early Bird" else 6
        
        # For guests, only charge for extra cards
        if self.payment_method_var.get() == "Guest":
            total_amount = extra_price * self.extras_var.get()
        else:
            total_amount = (ticket_price * self.quantity_var.get()) + (extra_price * self.extras_var.get())
        
        # Add to dataframe
        new_ticket = {
            'serial_number': serial_number,
            'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'buyer_name': self.name_var.get(),
            'email': self.email_var.get(),
            'ticket_type': self.ticket_type_var.get(),
            'quantity': self.quantity_var.get(),
            'extra_cards': self.extras_var.get(),
            'payment_method': self.payment_method_var.get(),
            'additional_info': self.additional_info_var.get(),
            'amount': total_amount
        }
        
        self.tickets_df = pd.concat([self.tickets_df, pd.DataFrame([new_ticket])], ignore_index=True)
        
        # Save data
        self.save_ticket_data()
        
        # Update status with all generated files
        status_text = "Tickets generated successfully!\n"
        if quantity > 0:
            status_text += f"{quantity} ticket(s) created\n"
        if extras > 0:
            status_text += f"1 extra cards file created ({extras} cards)\n"
        status_text += "\nFiles saved in tickets folder:"
        for file in generated_files:
            status_text += f"\n{os.path.basename(file)}"
        
        self.status_var.set(status_text)        # Clear form
        self.name_var.set("")
        self.email_var.set("")
        self.additional_info_var.set("")
        self.quantity_var.set(1)
        self.extras_var.set(0)
        
        # Generate and show email text for the current ticket
        self.show_email_text(
            serial_number=serial_number,
            buyer_name=new_ticket['buyer_name'],
            ticket_type=new_ticket['ticket_type'],
            quantity=new_ticket['quantity'],
            extras=new_ticket['extra_cards'],
            total_amount=total_amount,
            payment_method=new_ticket['payment_method']
        )
    
    def create_ticket_pdf(self, filename, serial_number, buyer_name, ticket_type, is_extra_card=False):
        try:
            # Create PDF
            c = canvas.Canvas(filename, pagesize=A4)
            width, height = A4

            # Load and draw background image
            try:
                image_path = os.path.join(os.path.dirname(__file__), "Bingo_Ticket_Generator.png")
                bg_image = ImageReader(image_path)
                c.drawImage(bg_image, 0, 0, width=width, height=height)
            except Exception as e:
                print(f"Background image loading failed: {e}")
                c.setFillColorRGB(0, 0, 0)
                c.rect(0, 0, width, height, fill=True)

            # Create white text with black glow effect
            def draw_text_with_glow(text, x, y, font_name, font_size):
                # Draw glow effect (black shadow)
                c.setFillColorRGB(0, 0, 0)
                for offset in [(x-1, y-1), (x-1, y+1), (x+1, y-1), (x+1, y+1)]:
                    c.setFont(font_name, font_size)
                    c.drawCentredString(offset[0], offset[1], text)
                
                # Draw white text
                c.setFillColorRGB(1, 1, 1)
                c.setFont(font_name, font_size)
                c.drawCentredString(x, y, text)

            # Draw buyer name in the center with larger font
            draw_text_with_glow(
                buyer_name,
                width/2,
                height/2,  # Moved down from height/2 + 3*cm
                "Helvetica-Bold",
                48  # Increased from 36
            )

            # Draw ticket type with larger font
            draw_text_with_glow(
                ticket_type,
                width/2,
                height/2 - 2*cm,  # Moved down from height/2
                "Helvetica",
                36  # Increased from 24
            )

            # Draw serial number and barcode for regular tickets
            if not is_extra_card and serial_number:
                # Draw "Serial number" caption
                draw_text_with_glow(
                    "Serial number",
                    width/2,
                    height/2 - 4*cm,  # Moved down from height/2 - 2*cm
                    "Helvetica",
                    18
                )
                
                # Draw serial number
                draw_text_with_glow(
                    serial_number,
                    width/2,
                    height/2 - 5*cm,  # Moved down from height/2 - 3*cm
                    "Helvetica",
                    24  # Increased from 12
                )

                # Generate barcode
                try:
                    # Create Code128 barcode
                    barcode_class = barcode.get_barcode_class('code128')
                    barcode_io = BytesIO()
                    code = barcode_class(serial_number, writer=ImageWriter())
                    code.write(barcode_io, options={"write_text": False})
                    
                    # Draw barcode
                    barcode_io.seek(0)
                    barcode_image = ImageReader(barcode_io)
                    barcode_width = width/3  # One third of page width
                    barcode_height = 1*cm
                    x = (width - barcode_width) / 2  # Center horizontally
                    y = height/2 - 7*cm  # Adjusted to new position below serial number
                    c.drawImage(barcode_image, x, y, width=barcode_width, height=barcode_height)
                except Exception as e:
                    print(f"Barcode generation failed: {e}")

                # Add important information in three columns below barcode
                important_info = {
                    'es': [
                        "Información Importante",
                        "• Código de vestimenta:",
                        "  Se requiere vestimenta BLANCA",
                        "• Reserva gastronómica:",
                        "  Henry +49 176 868 15317",
                        "• Capacidad del evento limitada",
                        "• Entradas no reembolsables"
                    ],
                    'de': [
                        "Wichtige Informationen",
                        "• Dresscode:",
                        "  WEIßE Kleidung erforderlich",
                        "• Gastronomische Reservierung:",
                        "  Henry +49 176 868 15317",
                        "• Begrenzte Veranstaltungskapazität",
                        "• Keine Rückerstattung möglich"
                    ],
                    'en': [
                        "Important Information",
                        "• Dress code:",
                        "  WHITE attire required",
                        "• Food & drinks reservation:",
                        "  Henry +49 176 868 15317",
                        "• Limited event capacity",
                        "• No refunds possible"
                    ]
                }

                # Calculate positions for the three columns
                margin = 2*cm
                col_width = (width - 2*margin) / 3
                base_y = height/2 - 8*cm  # Position higher on the page

                # Draw each language column
                for idx, (lang, info) in enumerate(important_info.items()):
                    x = margin + idx * col_width
                    current_y = base_y

                    # Draw each line of text
                    for i, line in enumerate(info):
                        font_size = 12 if i == 0 else 10  # Larger font for header
                        font_name = "Helvetica-Bold" if i == 0 else "Helvetica"
                        
                        # Draw with glow effect
                        draw_text_with_glow(
                            line,
                            x + col_width/2,  # Center in column
                            current_y,
                            font_name,
                            font_size
                        )
                        current_y -= 0.6*cm  # Space between lines

            # Save the PDF
            c.save()
            
        except Exception as e:
            raise Exception(f"Error creating PDF: {str(e)}")

    def show_email_text(self, serial_number, buyer_name, ticket_type, quantity, extras, total_amount, payment_method):
        email_template = {
            'es': f"""
¡Hola {buyer_name}!

¡Gracias por tu compra de entradas para el Bingo Pachanguero 2025 - White Party!

Detalles de tu compra:
- Número de Serie: {serial_number}
- Tipo de Entrada: {ticket_type}
- Cantidad: {quantity}
{"- Tarjetas Extra de Bingo: " + str(extras) if extras > 0 else ""}
- Monto Total: €{total_amount}
- Método de Pago: {payment_method}

Información importante:
- Fecha: 25 de octubre de 2025
- Hora: 20:00 (apertura de puertas 19:30)
- Lugar: Tanzhalle Freiburg
- Código de vestimenta: ¡BLANCO!

Tu(s) entrada(s) está(n) adjunta(s) a este correo. Por favor, muéstralas en la entrada.

¡Nos vemos en el Bingo!
Latino KV Freiburg
""",
            'de': f"""
Hallo {buyer_name}!

Vielen Dank für deinen Ticketkauf für das Bingo Pachanguero 2025 - White Party!

Deine Bestelldetails:
- Seriennummer: {serial_number}
- Ticketart: {ticket_type}
- Anzahl: {quantity}
{"- Extra Bingokarten: " + str(extras) if extras > 0 else ""}
- Gesamtbetrag: €{total_amount}
- Zahlungsmethode: {payment_method}

Wichtige Informationen:
- Datum: 25. Oktober 2025
- Zeit: 20:00 Uhr (Einlass ab 19:30)
- Ort: Tanzhalle Freiburg
- Dresscode: WEIß!

Dein(e) Ticket(s) findest du im Anhang. Bitte zeige sie am Eingang vor.

Wir sehen uns beim Bingo!
Latino KV Freiburg
""",
            'en': f"""
Hello {buyer_name}!

Thank you for purchasing tickets for the Bingo Pachanguero 2025 - White Party!

Your order details:
- Serial Number: {serial_number}
- Ticket Type: {ticket_type}
- Quantity: {quantity}
{"- Extra Bingo Cards: " + str(extras) if extras > 0 else ""}
- Total Amount: €{total_amount}
- Payment Method: {payment_method}

Important information:
- Date: October 25th, 2025
- Time: 8:00 PM (doors open 7:30 PM)
- Location: Tanzhalle Freiburg
- Dress code: WHITE!

Your ticket(s) are attached to this email. Please show them at the entrance.

See you at Bingo!
Latino KV Freiburg
"""
        }
        
        # Clear existing text
        self.email_text.delete(1.0, tk.END)
        
        # Insert all language versions
        self.email_text.insert(tk.END, "🇪🇸 ESPAÑOL:\n")
        self.email_text.insert(tk.END, email_template['es'])
        self.email_text.insert(tk.END, "\n🇩🇪 DEUTSCH:\n")
        self.email_text.insert(tk.END, email_template['de'])
        self.email_text.insert(tk.END, "\n🇬🇧 ENGLISH:\n")
        self.email_text.insert(tk.END, email_template['en'])

    def show_ticket_list(self):
        if len(self.tickets_df) == 0:
            messagebox.showinfo("Ticket List", "No tickets have been generated yet.")
            return
        
        # Create new window for ticket list
        list_window = tk.Toplevel(self.root)
        list_window.title("Generated Tickets")
        list_window.geometry("1200x800")  # Increased size
        
        # Create treeview
        columns = ['serial_number', 'date', 'buyer_name', 'ticket_type', 'quantity', 'extra_cards', 'amount', 'payment_method']
        tree = ttk.Treeview(list_window, columns=columns, show='headings')
        
        # Define headings
        headings = {
            'serial_number': 'Serial Number',
            'date': 'Date',
            'buyer_name': 'Buyer Name',
            'ticket_type': 'Ticket Type',
            'quantity': 'Qty',
            'extra_cards': 'Extra Cards',
            'amount': 'Amount (€)',
            'payment_method': 'Payment'
        }
        
        for col in columns:
            tree.heading(col, text=headings[col])
            tree.column(col, width=100)
        
        # Add scrollbar
        scrollbar = ttk.Scrollbar(list_window, orient=tk.VERTICAL, command=tree.yview)
        tree.configure(yscrollcommand=scrollbar.set)
        
        # Pack widgets
        tree.pack(side=tk.LEFT, fill=tk.BOTH, expand=1)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Add data
        for _, row in self.tickets_df.iterrows():
            tree.insert('', tk.END, values=[row[col] for col in columns])

if __name__ == "__main__":
    TicketGenerator()