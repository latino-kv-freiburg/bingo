import tkinter as tk
from tkinter import ttk, messagebox
import json
from datetime import datetime
import os
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.utils import ImageReader
import pandas as pd
import xlsxwriter
import barcode
from barcode.writer import ImageWriter
from io import BytesIO
from gmail_sender import send_ticket_via_email

with (Path(__file__).resolve().parent.parent / "event_config.json").open(encoding="utf-8") as config_file:
    EVENT_CONFIG = json.load(config_file)

EVENT_YEAR = EVENT_CONFIG["event"]["year"]

class TicketGenerator:
    def __init__(self):
        self.root = tk.Tk()
        self.root.title("Bingo Ticket Generator")
        self.root.geometry("1200x800")  # Increased window size
        self.root.resizable(True, True)  # Allow resizing if needed
        
        # Load or initialize ticket counter and list
        self.load_ticket_data()
        
        # Initialize variables for email sending
        self.last_generated_files = []
        self.last_ticket_data = None
        
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
        self.email_text = tk.Text(email_frame, width=80, height=35)  # Wider text field
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
        current_row = 3
        ttk.Label(main_frame, text="Ticket Information", font=('Helvetica', 12, 'bold')).grid(row=current_row, column=0, columnspan=2, pady=10)
        current_row += 1
        
        ttk.Label(main_frame, text="Ticket Type:").grid(row=current_row, column=0)
        self.ticket_type_var = tk.StringVar(value="Early Bird")
        earlybird_price = EVENT_CONFIG["tickets"]["prices"]["earlybird"]
        ttk.Radiobutton(main_frame, text=f"Early Bird ({earlybird_price}€)", variable=self.ticket_type_var, value="Early Bird").grid(row=current_row, column=1, sticky=tk.W)
        current_row += 1
        general_price = EVENT_CONFIG["tickets"]["prices"]["general"]
        ttk.Radiobutton(main_frame, text=f"General Entry ({general_price}€)", variable=self.ticket_type_var, value="General Entry").grid(row=current_row, column=1, sticky=tk.W)
        current_row += 1
        ttk.Radiobutton(main_frame, text="Guest (Only pays for Extras)", variable=self.ticket_type_var, value="Guest").grid(row=current_row, column=1, sticky=tk.W)
        current_row += 1
        
        ttk.Label(main_frame, text="Quantity:").grid(row=current_row, column=0)
        self.quantity_var = tk.IntVar(value=1)
        ttk.Spinbox(main_frame, from_=1, to=8, textvariable=self.quantity_var, width=5).grid(row=current_row, column=1, sticky=tk.W, pady=5)
        current_row += 1
        
        ttk.Label(main_frame, text="Extra Cards:").grid(row=current_row, column=0)
        self.extras_var = tk.IntVar(value=0)
        ttk.Spinbox(main_frame, from_=0, to=20, textvariable=self.extras_var, width=5).grid(row=current_row, column=1, sticky=tk.W, pady=5)
        current_row += 1
        
        # Payment Information
        ttk.Label(main_frame, text="Payment Information", font=('Helvetica', 12, 'bold')).grid(row=current_row, column=0, columnspan=2, pady=10)
        current_row += 1
        
        ttk.Label(main_frame, text="Payment Method:").grid(row=current_row, column=0)
        self.payment_method_var = tk.StringVar(value="PayPal")
        payment_methods = [
            ("PayPal", "PayPal"),
            ("Bank Transfer", "Bank Transfer"),
            ("Pays at Event", "Pays at Event")
        ]
        for method, value in payment_methods:
            ttk.Radiobutton(main_frame, text=method, variable=self.payment_method_var, value=value).grid(row=current_row, column=1, sticky=tk.W)
            current_row += 1

        # Additional Information
        ttk.Label(main_frame, text="Additional Information", font=('Helvetica', 12, 'bold')).grid(row=current_row, column=0, columnspan=2, pady=10)
        current_row += 1
        
        self.additional_info_var = tk.StringVar()
        ttk.Entry(main_frame, textvariable=self.additional_info_var, width=40).grid(row=current_row, column=0, columnspan=2, pady=5)
        current_row += 1

        # Buttons
        button_frame = ttk.Frame(main_frame)
        button_frame.grid(row=current_row, column=0, columnspan=2, pady=20)
        
        ttk.Button(button_frame, text="Generate Ticket", command=self.generate_ticket).pack(side=tk.LEFT, padx=5)
        self.send_email_btn = ttk.Button(button_frame, text="Send Email", command=self.send_email, state=tk.DISABLED)
        self.send_email_btn.pack(side=tk.LEFT, padx=5)
        ttk.Button(button_frame, text="View Ticket List", command=self.show_ticket_list).pack(side=tk.LEFT, padx=5)
        
        # Status Label
        self.status_var = tk.StringVar()
        current_row += 1
        ttk.Label(main_frame, textvariable=self.status_var, wraplength=400).grid(row=current_row, column=0, columnspan=2, pady=10)
        
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
            # Rename columns to internal names for consistency
            internal_columns = {
                'Serial Number': 'serial_number', 
                'Date': 'date', 
                'Buyer Name': 'buyer_name', 
                'Email': 'email', 
                'Ticket Type': 'ticket_type', 
                'Quantity': 'quantity', 
                'Extra Cards': 'extra_cards', 
                'Amount': 'amount', 
                'Payment Method': 'payment_method', 
                'Additional Info': 'additional_info'
            }
            # Only rename columns that exist in the loaded DataFrame
            self.tickets_df.rename(columns=internal_columns, inplace=True)
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
            # Ensure we read the payment method correctly, using 'Guest' if ticket_type is 'Guest'
            payment_method_display = ticket.payment_method if ticket.ticket_type != 'Guest' else 'Guest'
            amount_to_write = ticket.amount
            if pd.isna(amount_to_write):
                amount_to_write = ''
            
            additional_info_to_write = ticket.additional_info
            if pd.isna(additional_info_to_write):
                additional_info_to_write = ''

            data = [
                ticket.serial_number,
                ticket.date,
                ticket.buyer_name,
                ticket.email,
                ticket.ticket_type,
                ticket.quantity,
                ticket.extra_cards,
                amount_to_write, # Use the checked value
                payment_method_display, # Use the determined display method for formatting
                additional_info_to_write # Use the checked value
            ]
            
            # Use the determined display method for formatting
            row_format = formats.get(payment_method_display, workbook.add_format())
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
        
        event_date = EVENT_CONFIG["event"]["date"]
        date_code = f"{EVENT_YEAR % 100:02d}{event_date['month']:02d}{event_date['day']:02d}"
        serial = f"{date_code}-{counter:03d}{letter_code}"
        
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
                    f"Bingo-Pachanguero-{EVENT_YEAR}_{buyer_name.replace(' ', '-')}_{serial_number}.pdf"
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
                    f"Bingo-Pachanguero-{EVENT_YEAR}_{buyer_name.replace(' ', '-')}_Additional-cards.pdf"
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
        
        # Determine base ticket price and extra card price
        if ticket_type == "Early Bird":
            ticket_price = EVENT_CONFIG["tickets"]["prices"]["earlybird"]
            extra_price = EVENT_CONFIG["tickets"]["extraCardPrices"]["earlybird"]
        elif ticket_type == "General Entry":
            ticket_price = EVENT_CONFIG["tickets"]["prices"]["general"]
            extra_price = EVENT_CONFIG["tickets"]["extraCardPrices"]["general"]
        elif ticket_type == "Guest":
            # For guests, the ticket price is 0
            ticket_price = 0
            extra_price = EVENT_CONFIG["tickets"]["extraCardPrices"]["guest"]
        else:
            # Default fallback
            ticket_price = EVENT_CONFIG["tickets"]["prices"]["general"]
            extra_price = EVENT_CONFIG["tickets"]["extraCardPrices"]["general"]

        # Calculate total amount
        total_amount = (ticket_price * self.quantity_var.get()) + (extra_price * self.extras_var.get())
        
        # Determine payment method
        payment_method = self.payment_method_var.get()
        if ticket_type == "Guest":
            payment_method = "Guest" # Override payment method for Guests
        
        # Add to dataframe
        new_ticket = {
            'serial_number': serial_number,
            'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            'buyer_name': self.name_var.get(),
            'email': self.email_var.get(),
            'ticket_type': self.ticket_type_var.get(),
            'quantity': self.quantity_var.get(),
            'extra_cards': self.extras_var.get(),
            'payment_method': payment_method, # Use the determined payment_method
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
        
        # Store generated files for email sending
        self.last_generated_files = generated_files
        self.last_ticket_data = new_ticket
        
        self.status_var.set(status_text)
        
        # Enable send email button
        self.send_email_btn.configure(state=tk.NORMAL)
        
        # Clear form
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

            # Create black text with white glow effect
            def draw_text_with_glow(text, x, y, font_name, font_size):
                # Draw glow effect (white shadow)
                c.setFillColorRGB(1, 1, 1)
                for offset in [(x-1, y-1), (x-1, y+1), (x+1, y-1), (x+1, y+1)]:
                    c.setFont(font_name, font_size)
                    c.drawCentredString(offset[0], offset[1], text)
                
                # Draw white text
                c.setFillColorRGB(0, 0, 0)
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
                        "• Reserva gastronómica:",
                        "  Henry +49 176 868 15317",
                        "• Capacidad del evento limitada",
                        "• Entradas no reembolsables"
                    ],
                    'de': [
                        "Wichtige Informationen",
                        "• Gastronomische Reservierung:",
                        "  Henry +49 176 868 15317",
                        "• Begrenzte Veranstaltungskapazität",
                        "• Keine Rückerstattung möglich"
                    ],
                    'en': [
                        "Important Information",
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
                        
                        if i == 0:  # Title - keep centered
                            draw_text_with_glow(
                                line,
                                x + col_width/2,  # Center in column
                                current_y,
                                font_name,
                                font_size
                            )
                        else:  # Bullet points - left aligned with small margin
                            # Draw glow effect (white shadow)
                            text_x = x + 0.3*cm  # Add small left margin
                            c.setFillColorRGB(1, 1, 1)
                            for offset in [(text_x-1, current_y-1), (text_x-1, current_y+1), 
                                         (text_x+1, current_y-1), (text_x+1, current_y+1)]:
                                c.setFont(font_name, font_size)
                                c.drawString(offset[0], offset[1], line)
                            
                            # Draw black text
                            c.setFillColorRGB(0, 0, 0)
                            c.setFont(font_name, font_size)
                            c.drawString(text_x, current_y, line)
                        
                        current_y -= 0.6*cm  # Space between lines

            # Save the PDF
            c.save()
            
        except Exception as e:
            raise Exception(f"Error creating PDF: {str(e)}")

    def show_email_text(self, serial_number, buyer_name, ticket_type, quantity, extras, total_amount, payment_method):
        # Create email content for each language with unified formatting
        event_date = EVENT_CONFIG["event"]["date"]
        event_date_display = datetime(
            EVENT_YEAR, event_date["month"], event_date["day"]
        ).strftime("%d.%m.%Y")
        dress_codes = EVENT_CONFIG["event"]["dressCode"]
        venue = EVENT_CONFIG["event"]["venue"]
        extra_cards_es = f"\n- Tarjetas Extra de Bingo: {extras}" if extras > 0 else ""
        extra_cards_de = f"\n- Extra Bingokarten: {extras}" if extras > 0 else ""
        extra_cards_en = f"\n- Extra Bingo Cards: {extras}" if extras > 0 else ""
        
        email_template = {
            'es': f"""¡Hola {buyer_name}!

¡Gracias por tu compra de entradas para el Bingo Pachanguero {EVENT_YEAR}!

Detalles de tu compra:
- Número de Serie: {serial_number}
- Tipo de Entrada: {ticket_type}
- Cantidad: {quantity}{extra_cards_es}

- Monto Total: €{total_amount}
- Método de Pago: {payment_method}

Información importante:
- Fecha: {event_date_display}
- Hora: 20:00 (apertura de puertas 19:30)
- Lugar: {venue}
- Código de vestimenta: {dress_codes['es']}

Tu(s) entrada(s) está(n) adjunta(s) a este correo. Por favor, muéstralas en la entrada.

¡Nos vemos en el Bingo Pachanguero!
""",
            'de': f"""Hallo {buyer_name}!

Vielen Dank für deinen Ticketkauf für das Bingo Pachanguero {EVENT_YEAR}!

Deine Bestelldetails:
- Seriennummer: {serial_number}
- Ticketart: {ticket_type}
- Anzahl: {quantity}{extra_cards_de}

- Gesamtbetrag: €{total_amount}
- Zahlungsmethode: {payment_method}

Wichtige Informationen:
- Datum: {event_date_display}
- Zeit: 20:00 Uhr (Einlass ab 19:30)
- Ort: {venue}
- Dress-Code: {dress_codes['de']}

Dein(e) Ticket(s) findest du im Anhang. Bitte zeige sie am Eingang vor.

Wir sehen uns beim Bingo Pachanguero!
""",
            'en': f"""Thank you for purchasing tickets for the Bingo Pachanguero {EVENT_YEAR}!

Your order details:
- Serial Number: {serial_number}
- Ticket Type: {ticket_type}
- Quantity: {quantity}{extra_cards_en}

- Total Amount: €{total_amount}
- Payment Method: {payment_method}

Important information:
- Date: {event_date_display}
- Time: 8:00 PM (doors open 7:30 PM)
- Location: {venue}
- Dress code: {dress_codes['en']}

Your ticket(s) are attached to this email. Please show them at the entrance.

See you at the Bingo Pachanguero!

Saludos cordiales / mit freundlichen Grüßen / kind regards
Latino KV Freiburg"""
        }
        
        # Clear existing text
        self.email_text.delete(1.0, tk.END)
        
        # Insert all language versions with separators
        self.email_text.insert(tk.END, email_template['es'])
        self.email_text.insert(tk.END, "\n----------\n\n")
        self.email_text.insert(tk.END, email_template['de'])
        self.email_text.insert(tk.END, "\n----------\n\n")
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

    def send_email(self):
        """Handle manual sending of ticket emails."""
        if not self.last_generated_files or not self.last_ticket_data:
            messagebox.showerror(
                "Error",
                "No tickets available to send. Please generate tickets first."
            )
            return

        try:
            # Show confirmation dialog
            if not messagebox.askyesno(
                "Send Email",
                f"Send tickets to {self.last_ticket_data['email']}?"
            ):
                return

            subject = f"Your Bingo Pachanguero {EVENT_YEAR} Tickets"
            
            # Generate email text
            self.show_email_text(
                serial_number=self.last_ticket_data['serial_number'],
                buyer_name=self.last_ticket_data['buyer_name'],
                ticket_type=self.last_ticket_data['ticket_type'],
                quantity=self.last_ticket_data['quantity'],
                extras=self.last_ticket_data['extra_cards'],
                total_amount=self.last_ticket_data['amount'],
                payment_method=self.last_ticket_data['payment_method']
            )
            body_text = self.email_text.get(1.0, tk.END)
            
            # Send each generated file as a separate email
            for file in self.last_generated_files:
                send_ticket_via_email(
                    recipient_email=self.last_ticket_data['email'],
                    subject=subject,
                    body_text=body_text,
                    attachment_file=file
                )
            
            messagebox.showinfo(
                "Success",
                "Tickets have been sent successfully!"
            )
            
            # Disable send button after successful sending
            self.send_email_btn.configure(state=tk.DISABLED)
            
        except Exception as e:
            messagebox.showerror(
                "Email Error",
                f"Failed to send tickets via email: {str(e)}\n\nPlease check your internet connection and try again."
            )

if __name__ == "__main__":
    TicketGenerator()