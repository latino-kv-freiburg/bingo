# Bingo Pachanguero 2026 Website

A simple, responsive static website for the "Bingo Pachanguero 2026" event and its fifth anniversary.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Three Main Pages**:
  - Homepage with event details and call-to-action
  - Tickets page with pricing options and PayPal integration
  - Contact page with contact form and FAQ section
- **Modern UI**: Clean, minimal design with smooth animations
- **PayPal Integration**: Ready-to-use ticket purchase system
- **Interactive Elements**: Mobile-friendly navigation, contact form, and hover effects

## Project Structure

```
/
├── index.html          # Homepage
├── tickets.html        # Tickets page
├── contact.html        # Contact page
├── event_config.json   # Shared event details, multilingual program, and ticket prices
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Setup Instructions

1. **Clone or Download** the project files
2. **Edit Event Settings** in `event_config.json`. The website and ticket generator read dates, dress code, multilingual program, and ticket prices from this file.
3. **Run Locally** from the project root with `python -m http.server 8000`, then open `http://localhost:8000`. The website needs HTTP access to load the JSON file.
4. **Customize Content** in the HTML files and translations in `js/script.js` as needed
5. **Customize Styling** in `css/style.css`
6. **Deploy** all project files, including `event_config.json`, to your web hosting service

## Customization Guide

### Event Details
Edit the following in `index.html`:
- Event title and subtitle
- Date, time, and location
- Event description
- Call-to-action button text

### Ticket Information
Update `tickets.html` with:
- Ticket types and prices
- Features included with each ticket
- Important information and rules

### Contact Information
Modify `contact.html` to include:
- Your contact email and phone
- Event venue address
- FAQ items relevant to your event

### PayPal Integration
In `js/script.js`, update the `buyTicket` function:
1. Replace `your-paypal-email@example.com` with your PayPal business email
2. Adjust currency if needed (currently set to USD)
3. Customize return and cancel URLs

### Styling
Key customization points in `css/style.css`:
- **Colors**: Update the CSS variables for brand colors
- **Fonts**: Change the font family in the body selector
- **Layout**: Modify grid layouts and spacing as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features to Implement (Optional)

- **Analytics**: Add Google Analytics tracking
- **Social Media**: Add social media sharing buttons
- **Gallery**: Add photo gallery from previous events
- **Newsletter**: Add email signup form
- **Multi-language**: Add language switcher for bilingual support

## File Sizes

- CSS: ~12KB
- JavaScript: ~6KB
- HTML (all pages): ~15KB total

## Performance

- Lightweight and fast loading
- No external dependencies except optional analytics
- Optimized for mobile devices
- Progressive enhancement approach

## License

This project is free to use and modify for your events.

## Support

For questions or customization help, contact the event organizers at info@bingopachanguero.com.