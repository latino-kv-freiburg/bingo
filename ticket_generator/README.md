# Ticket Generator for Bingo Pachanguero 2025

This Python script provides a graphical interface for generating tickets for the Bingo Pachanguero 2025 event. It creates individual PDF tickets with custom backgrounds, unique serial numbers, and maintains a formatted list of all generated tickets.

## Features

- Graphical user interface for ticket generation
- Unique serial number system (251025-xxxyy format)
- Individual PDF generation for each ticket and extra cards
- Custom ticket design with background image
- White text with black glow effect for visibility
- Formatted Excel database with color-coding
- Support for Early Bird and General Entry tickets
- Extra bingo cards management
- Multi-language email template generator
- Payment tracking with visual indicators

## Requirements

```bash
pip install pandas reportlab openpyxl xlsxwriter
```

## Usage

1. Run the script:
```bash
python ticket_generator.py
```

2. Enter ticket details:
   - Buyer name and email
   - Ticket type (Early Bird: 12€/General Entry: 15€)
   - Quantity (up to 8 tickets)
   - Extra cards (up to 20 cards)
   - Payment method (PayPal/Bank Transfer/Guest/Pays at Event)
   - Additional information (optional)

3. Click "Generate Ticket" to create:
   - Individual PDF for each ticket
   - Separate PDF for extra cards (if ordered)
   - Multi-language email templates
   - Entry in the ticket database

4. Use "View Ticket List" to see all generated tickets

## File Structure

- `tickets/` - Directory for generated PDF tickets
- `ticket_data.json` - Stores the sequential counter
- `tickets.xlsx` - Color-coded database of all tickets
- `Bingo_Ticket_Generator.png` - Ticket background template

## File Naming Convention

Generated PDFs follow these formats:
- Regular tickets: `Bingo-Pachanguero-2025_<Buyer>_<Serial>.pdf`
- Extra cards: `Bingo-Pachanguero-2025_<Buyer>_Additional-cards.pdf`

## Serial Number System

Format: 251025-xxxYY
- 251025: Event date (25 October 2025)
- xxx: Sequential number (000-999)
- YY: Automatically incrementing letters (AA-ZZ)

## Excel Database Features

Color-coded payment methods:
- PayPal: Light blue
- Bank Transfer: Light green
- Guest: Light grey
- Pays at Event: Light yellow

## Notes

- Each ticket generates a separate PDF file
- Extra cards are combined into one additional PDF
- Email templates provided in Spanish, German, and English
- Automatic serial number and letter code generation
- Background image with centered white text and black glow
- Full tracking of payments and additional information