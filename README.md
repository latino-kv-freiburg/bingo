# Bingo Pachanguero 2025 – White Party Website

A simple, responsive static website for the "Bingo Pachanguero 2025 – White Party" event.

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
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # This file
```

## Setup Instructions

1. **Clone or Download** the project files
2. **Customize Content**: Edit the HTML files to match your event details
3. **Update PayPal Settings**: In `js/script.js`, replace `your-paypal-email@example.com` with your actual PayPal business email
4. **Customize Styling**: Modify `css/style.css` to match your brand colors and preferences
5. **Test Locally**: Open `index.html` in a web browser to test the site
6. **Deploy**: Upload all files to your web hosting service

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