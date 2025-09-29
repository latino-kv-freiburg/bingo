// Multi-language support with updated translations
const translations = {
    es: { // Spanish (default)
        home: 'Inicio',
        tickets: 'Entradas',
        contact: 'Contacto',
        title: 'Bingo Pachanguero 2025',
        'white-party': 'White Party',
        subtitle: '25 Octubre 2025 – Tanzhalle Freiburg',
        description: '¡Una noche inolvidable con Salsa, Música en vivo y nuestro legendario Bingo con premios!',
        'cta-button': 'Compra tus entradas',
        footer: '© 2025 Latino KV Freiburg – Bingo Pachanguero White Party',
        'tickets-title': 'Entradas',
        'tickets-subtitle': '¡Elige tu entrada y prepárate para una noche increíble!',
        'tickets-page-title': 'Entradas - Bingo Pachanguero 2025',
        'contact-title': 'Contáctanos',
        'contact-text': 'Para preguntas sobre el Bingo Pachanguero, escríbenos a <a href="mailto:latinokvfreiburg@gmail.com">latinokvfreiburg@gmail.com</a> o envíanos un DM en Instagram <a href="https://instagram.com/latinokv_freiburg" target="_blank">@latinokv_freiburg</a>',
        'general-ticket': 'Entrada General',
        'earlybird-ticket': 'Early Bird',
        'entry-feature': 'Entrada al evento',
        'bingo-card-included': '1 carta de bingo incluida',
        'valid-until': '(Válido hasta 11 Octubre)',
        'save-feature': 'Ahorra €3 con reserva anticipada',
        'select-ticket-type': 'Selecciona tipo de entrada',
        'select-quantity': 'Número de entradas',
        'select-extra-cards': 'Cartas extra de bingo',
        'extra-cards-help': 'Cartas adicionales para aumentar tus posibilidades (opcional)',
        'extra-card-price': '€4 por carta extra (Early Bird)',
        'price-summary': 'Resumen del precio',
        'tickets-label': 'Entradas:',
        'extra-cards-label': 'Cartas extra:',
        'total-label': 'Total:',
        'important-info': 'Información Importante',
        'dress-code': 'Código de vestimenta: Vestimenta blanca obligatoria',
        'event-date': 'Fecha del evento: 25 Octubre 2025',
        'event-location': 'Ubicación: Tanzhalle Freiburg',
        'non-refundable': 'Las entradas no son reembolsables',
        'limited-capacity': 'Capacidad limitada - ¡reserva pronto!',
                'food-reservation': 'For food reservations, contact Henry: +49 176 868 15317',
        'buy-paypal': 'Buy via PayPal',
        'ticket-quantity': 'Number of tickets:',
        'extra-cards-quantity': 'Extra cards (€4/card):',
        'extra-cards-quantity-6': 'Extra cards (€6/card):',
        'tickets-cost': 'Tickets:',
        'extras-cost': 'Extra cards:',
        'total-cost': 'Total:',
        'extra-cards-4': '✓ Extra cards: €4/card',
        'extra-cards-6': '✓ Extra cards: €6/card',
        'reservation-info': 'For dining reservations: Henry +49 176 868 15317',
        'ticket-info': `Thank you for your purchase! Some important information:

Come in your best white outfit
On event day you will receive your bingo card at reception
You have the option to purchase an additional bingo card during the event for €6
So everyone can enjoy the food, we recommend reserving in advance with Henry: +49 176 868 15317
Cancellation is not possible

We wish you lots of success at Bingo Pachanguero!`,
        'buy-paypal': 'Comprar via PayPal',
        'ticket-quantity': 'Número de entradas:',
        'extra-cards-quantity': 'Cartas extra (€4/carta):',
        'extra-cards-quantity-6': 'Cartas extra (€6/carta):',
        'tickets-cost': 'Entradas:',
        'extras-cost': 'Cartas extra:',
        'total-cost': 'Total:',
        'extra-cards-4': '✓ Cartas extra: €4/carta',
        'extra-cards-6': '✓ Cartas extra: €6/carta',
        'earlybird-price': '€12',
        'general-price': '€15',
        'reservation-info': 'Para reservas gastronómicas: Henry +49 176 868 15317',
        'ticket-info': `¡Gracias por tu compra! Información importante:

Ven con tu mejor atuendo blanco
El día del evento recibirás tu carta de bingo en recepción
Puedes comprar una carta de bingo adicional durante el evento por €6
Para que todos puedan disfrutar de la comida, recomendamos reservar con Henry: +49 176 868 15317
No es posible cancelar

¡Te deseamos mucho éxito en el Bingo Pachanguero!`,
        // Thank you page translations
        'thanks-title': '¡Gracias por tu compra!',
        'thanks-message': 'Tu entrada para el Bingo Pachanguero 2025 – White Party ha sido procesada exitosamente.',
        'what-next-title': '¿Qué sigue?',
        'pdf-info': 'Tu ticket en PDF se ha descargado automáticamente',
        'email-info': 'Recibirás un email de confirmación de PayPal',
        'presentation-info': 'Presenta tu ticket en la entrada del evento',
        'event-details-title': 'Detalles del Evento',
        'date-label': 'Fecha:',
        'time-label': 'Hora:',
        'location-label': 'Ubicación:',
        'dress-code-label': 'Código de vestimenta:',
        'event-time': '20:00',
        'important-reminders-title': 'Recordatorios Importantes',
        'arrival-early': 'Llega temprano para registro y recibir tu carta de bingo',
        'white-attire': 'Vestimenta blanca es obligatoria para entrar',
        'no-refunds': 'Las entradas no son reembolsables',
        'contact-info': 'Para preguntas, contáctanos en latinokvfreiburg@gmail.com',
        'back-home': 'Volver al inicio',
        'buy-more': 'Comprar más entradas',
        // Ticket info text
        'ticket-info-text': `¡Gracias por tu compra! Información importante:

Ven con tu mejor outfit blanco
El día del evento recibirás tu carta de bingo en recepción
Tendrás la oportunidad de comprar una carta adicional durante el evento por 6€
Para que todos puedan disfrutar de la comida, recomendamos reservar con Henry: +49 176 868 15317
No se permiten cancelaciones

¡Te deseamos mucha suerte en el Bingo Pachanguero!`
    },
    de: { // German
        home: 'Startseite',
        tickets: 'Tickets',
        contact: 'Kontakt',
        title: 'Bingo Pachanguero 2025',
        'white-party': 'White Party',
        subtitle: '25. Oktober 2025 – Tanzhalle Freiburg',
        description: 'Eine unvergessliche Nacht mit Salsa, Live-Musik und unserem legendären Bingo mit Preisen!',
        'cta-button': 'Tickets kaufen',
        footer: '© 2025 Latino KV Freiburg – Bingo Pachanguero White Party',
        'tickets-title': 'Tickets',
        'tickets-subtitle': 'Wähle dein Ticket und bereite dich auf eine fantastische Nacht vor!',
        'tickets-page-title': 'Tickets - Bingo Pachanguero 2025',
        'contact-title': 'Kontakt',
        'contact-text': 'Für Fragen zum Bingo Pachanguero schreibt uns an <a href="mailto:latinokvfreiburg@gmail.com">latinokvfreiburg@gmail.com</a> oder schickt uns eine DM auf Instagram <a href="https://instagram.com/latinokv_freiburg" target="_blank">@latinokv_freiburg</a>',
        'general-ticket': 'Allgemeiner Eintritt',
        'earlybird-ticket': 'Frühbucher',
        'entry-feature': 'Eintritt zur Veranstaltung',
        'bingo-card-included': '1 Bingo-Karte inklusive',

        'valid-until': '(Gültig bis 11. Oktober)',
        'save-feature': '€3 sparen mit Frühbuchung',
        'select-ticket-type': 'Ticket-Typ wählen',
        'select-quantity': 'Anzahl der Tickets',
        'select-extra-cards': 'Extra Bingo-Karten',
        'extra-cards-help': 'Zusätzliche Karten für bessere Gewinnchancen (optional)',
        'extra-card-price': '€4 pro Extra-Karte (Frühbucher)',
        'price-summary': 'Preisübersicht',
        'tickets-label': 'Tickets:',
        'extra-cards-label': 'Extra-Karten:',
        'total-label': 'Gesamt:',
        'important-info': 'Wichtige Informationen',
        'dress-code': 'Dress-Code: Weiße Kleidung erforderlich',
        'event-date': 'Veranstaltungsdatum: 25. Oktober 2025',
        'event-location': 'Ort: Tanzhalle Freiburg',
        'non-refundable': 'Tickets sind nicht erstattungsfähig',
        'limited-capacity': 'Begrenzte Kapazität - früh buchen!',
        'food-reservation': 'Für Essensreservierung kontaktiert Henry: +49 176 868 15317',
        'buy-paypal': 'Mit PayPal kaufen',
        'ticket-quantity': 'Anzahl der Tickets:',
        'extra-cards-quantity': 'Extra-Karten (€4/Karte):',
        'extra-cards-quantity-6': 'Extra-Karten (€6/Karte):',
        'tickets-cost': 'Tickets:',
        'extras-cost': 'Extra-Karten:',
        'total-cost': 'Gesamt:',
        'extra-cards-4': '✓ Extra-Karten: €4/Karte',
        'extra-cards-6': '✓ Extra-Karten: €6/Karte',
        'earlybird-price': '€12',
        'general-price': '€15',
        'extra-cards-4': '✓ Extra-Karten: €4/Karte',
        'extra-cards-6': '✓ Extra-Karten: €6/Karte',
        'earlybird-price': '€12',
        'general-price': '€15',
        // Thank you page translations
        'thanks-title': 'Vielen Dank für Ihren Kauf!',
        'thanks-message': 'Ihr Ticket für die Bingo Pachanguero 2025 – White Party wurde erfolgreich verarbeitet.',
        'what-next-title': 'Was kommt als Nächstes?',
        'pdf-info': 'Ihr PDF-Ticket wurde automatisch heruntergeladen',
        'email-info': 'Sie erhalten eine PayPal-Bestätigungs-E-Mail',
        'presentation-info': 'Zeigen Sie Ihr Ticket am Veranstaltungseingang vor',
        'event-details-title': 'Veranstaltungsdetails',
        'date-label': 'Datum:',
        'time-label': 'Zeit:',
        'location-label': 'Ort:',
        'dress-code-label': 'Dress-Code:',
        'event-time': '20:00',
        'important-reminders-title': 'Wichtige Erinnerungen',
        'arrival-early': 'Kommen Sie früh zur Registrierung und zum Erhalt Ihrer Bingo-Karte',
        'white-attire': 'Weiße Kleidung ist für den Eintritt obligatorisch',
        'no-refunds': 'Tickets sind nicht erstattungsfähig',
        'contact-info': 'Bei Fragen kontaktieren Sie uns unter latinokvfreiburg@gmail.com',
        'back-home': 'Zurück zur Startseite',
        'buy-more': 'Weitere Tickets kaufen',
        // Ticket info text
        'ticket-info-text': `Vielen Dank für Ihren Einkauf! Einige wichtige Informationen:

Kommen Sie in Ihrem besten weißen Outfit
Am Veranstaltungstag erhalten Sie Ihre Bingo-Karte an der Rezeption
Sie haben die Möglichkeit, eine zusätzliche Bingo-Karte während des Events für 6 Euro zu erwerben
Damit jeder das Essen genießen kann, empfehlen wir, im Voraus bei Henry zu reservieren: +49 176 868 15317
Eine Stornierung ist nicht möglich

Wir wünschen Ihnen viel Erfolg beim Bingo Pachanguero!`
    },
    en: { // English
        home: 'Home',
        tickets: 'Tickets',
        contact: 'Contact',
        title: 'Bingo Pachanguero 2025',
        'white-party': 'White Party',
        subtitle: '25 October 2025 – Tanzhalle Freiburg',
        description: 'An unforgettable night with Salsa, Live Music, and our legendary Bingo with prizes!',
        'cta-button': 'Get your tickets',
        footer: '© 2025 Latino KV Freiburg – Bingo Pachanguero White Party',
        'tickets-title': 'Tickets',
        'tickets-subtitle': 'Choose your ticket and get ready for an amazing night!',
        'tickets-page-title': 'Tickets - Bingo Pachanguero 2025',
        'contact-title': 'Contact us',
        'contact-text': 'For questions about the Bingo Pachanguero, write to <a href="mailto:latinokvfreiburg@gmail.com">latinokvfreiburg@gmail.com</a> or DM us on Instagram <a href="https://instagram.com/latinokv_freiburg" target="_blank">@latinokv_freiburg</a>',
        'general-ticket': 'General Entry',
        'earlybird-ticket': 'Early Bird',
        'entry-feature': 'Entry to the event',
        'bingo-card-included': '1 bingo card included',
        'valid-until': '(Valid until 11 October)',
        'save-feature': 'Save €3 with early booking',
        'select-ticket-type': 'Select ticket type',
        'select-quantity': 'Number of tickets',
        'select-extra-cards': 'Extra bingo cards',
        'extra-cards-help': 'Additional cards to increase your chances (optional)',
        'extra-card-price': '€4 per extra card (Early Bird)',
        'price-summary': 'Price Summary',
        'tickets-label': 'Tickets:',
        'extra-cards-label': 'Extra cards:',
        'total-label': 'Total:',
        'important-info': 'Important Information',
        'dress-code': 'Dress code: White attire required',
        'event-date': 'Event date: 25 October 2025',
        'event-location': 'Location: Tanzhalle Freiburg',
        'non-refundable': 'Tickets are non-refundable',
        'limited-capacity': 'Limited capacity - book early!',
        'food-reservation': 'For food reservations, contact Henry: +49 176 868 15317',
        'buy-paypal': 'Buy via PayPal',
        'ticket-quantity': 'Number of tickets:',
        'extra-cards-quantity': 'Extra cards (€4/card):',
        'extra-cards-quantity-6': 'Extra cards (€6/card):',
        'tickets-cost': 'Tickets:',
        'extras-cost': 'Extra cards:',
        'total-cost': 'Total:',
        'extra-cards-4': '✓ Extra cards: €4/card',
        'extra-cards-6': '✓ Extra cards: €6/card',
        'earlybird-price': '€12',
        'general-price': '€15',
        'select-extra-cards': 'Extra bingo cards',
        'extra-cards-help': 'Additional cards to increase your chances (optional)',
        'extra-card-price': '€4 per extra card (Early Bird)',
        'price-summary': 'Price Summary',
        'tickets-label': 'Tickets:',
        'extra-cards-label': 'Extra cards:',
        'total-label': 'Total:',
        'important-info': 'Important Information',
        'dress-code': 'Dress code: White attire required',
        'event-date': 'Event date: 25 October 2025',
        'event-location': 'Location: Tanzhalle Freiburg',
        'non-refundable': 'Tickets are non-refundable',
        'limited-capacity': 'Limited capacity - book early!',
        'food-reservation': 'To reserve food, contact Henry: +49 176 868 15317',
        // Thank you page translations
        'thanks-title': 'Thank you for your purchase!',
        'thanks-message': 'Your ticket for the Bingo Pachanguero 2025 – White Party has been successfully processed.',
        'what-next-title': 'What\'s next?',
        'pdf-info': 'Your PDF ticket has been automatically downloaded',
        'email-info': 'You will receive a PayPal confirmation email',
        'presentation-info': 'Present your ticket at the event entrance',
        'event-details-title': 'Event Details',
        'date-label': 'Date:',
        'time-label': 'Time:',
        'location-label': 'Location:',
        'dress-code-label': 'Dress code:',
        'event-time': '8:00 PM',
        'important-reminders-title': 'Important Reminders',
        'arrival-early': 'Arrive early for registration and to receive your bingo card',
        'white-attire': 'White attire is mandatory for entry',
        'no-refunds': 'Tickets are non-refundable',
        'contact-info': 'For questions, contact us at latinokvfreiburg@gmail.com',
        'back-home': 'Back to home',
        'buy-more': 'Buy more tickets',
        // Ticket info text
        'ticket-info-text': `Thank you for your purchase! Important information:

Come in your best white outfit
On event day you'll receive your bingo card at reception
You'll have the opportunity to buy an additional bingo card during the event for €6
So everyone can enjoy the food, we recommend reserving in advance with Henry: +49 176 868 15317
Cancellation is not possible

We wish you good luck at Bingo Pachanguero!`
    }
};

// Get current language from localStorage or default to Spanish
let currentLanguage = localStorage.getItem('language') || 'es';

// Current selection state
let currentTicketType = 'earlybird';
let ticketQuantity = 1;
let extraQuantity = 0;

// Change language function
function changeLanguage(lang) {
    console.log(`Changing language from ${currentLanguage} to ${lang}`);
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update content immediately
    updateContent();
    updateActiveLanguageButton();
    updatePricing();
    
    // Force another update after a small delay to catch any missed elements
    setTimeout(() => {
        updateContent();
        console.log('Language change completed:', lang);
    }, 50);
}

// Update content based on current language
function updateContent() {
    console.log('Updating content to language:', currentLanguage);
    const elements = document.querySelectorAll('[data-lang]');
    console.log('Found elements with data-lang:', elements.length);
    
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        console.log('Processing element with key:', key);
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            const translation = translations[currentLanguage][key];
            if (element.innerHTML.includes('<a') || element.innerHTML.includes('<svg')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
            console.log('Updated element:', key, 'to:', translation);
        } else {
            console.warn('No translation found for key:', key, 'in language:', currentLanguage);
            // If no translation found, keep existing content or use Spanish as fallback
            if (translations['es'] && translations['es'][key] && !element.textContent.trim()) {
                element.textContent = translations['es'][key];
                console.log('Used Spanish fallback for:', key);
            }
        }
    });
    
    // Force update the page title as well
    const titleElement = document.querySelector('title[data-lang], title');
    if (titleElement && translations[currentLanguage] && translations[currentLanguage]['tickets-page-title']) {
        titleElement.textContent = translations[currentLanguage]['tickets-page-title'];
    }
}

// Update active language button
function updateActiveLanguageButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${currentLanguage}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Check if early bird is still valid
function isEarlyBirdValid() {
    const today = new Date();
    const deadline = new Date('2025-10-11');
    return today <= deadline;
}

// Adjust quantity for tickets or extra cards
function adjustQuantity(type, change) {
    if (type === 'tickets') {
        const newValue = ticketQuantity + change;
        if (newValue >= 1 && newValue <= 10) {
            ticketQuantity = newValue;
            document.getElementById('ticketQuantity').value = ticketQuantity;
        }
    } else if (type === 'extra') {
        const newValue = extraQuantity + change;
        if (newValue >= 0 && newValue <= 20) {
            extraQuantity = newValue;
            document.getElementById('extraQuantity').value = extraQuantity;
        }
    }
    updatePricing();
}

// Update pricing display
function updatePricing() {
    // Get current selections
    const selectedType = document.querySelector('input[name="ticketType"]:checked');
    if (selectedType) {
        currentTicketType = selectedType.value;
    }
    
    // Check if early bird is still valid
    if (currentTicketType === 'earlybird' && !isEarlyBirdValid()) {
        // Switch to general and disable early bird
        currentTicketType = 'general';
        document.getElementById('general').checked = true;
        document.getElementById('earlybird-option').style.opacity = '0.5';
        document.getElementById('earlybird').disabled = true;
    }
    
    // Calculate prices
    const ticketPrice = currentTicketType === 'earlybird' ? 12 : 15;
    const extraCardPrice = currentTicketType === 'earlybird' ? 4 : 6;
}

// Calculate total price for ticket type
function calculateTotal(ticketType) {
    console.log('Calculating total for:', ticketType);
    const ticketPrice = ticketType === 'earlybird' ? 12 : 15;
    const extraPrice = ticketType === 'earlybird' ? 4 : 6;
    
    const quantity = parseInt(document.getElementById(`${ticketType}-quantity`).value);
    const extras = parseInt(document.getElementById(`${ticketType}-extras`).value);
    
    const ticketsCost = quantity * ticketPrice;
    const extrasCost = extras * extraPrice;
    const total = ticketsCost + extrasCost;
    
    // Update display
    document.getElementById(`${ticketType}-tickets-cost`).textContent = `€${ticketsCost}`;
    document.getElementById(`${ticketType}-extras-cost`).textContent = `€${extrasCost}`;
    document.getElementById(`${ticketType}-total`).textContent = `€${total}`;
    
    console.log(`Updated ${ticketType}: ${quantity} tickets + ${extras} extras = €${total}`);
}

// Purchase tickets function
function purchaseTickets(ticketType) {
    console.log('Purchase tickets called for:', ticketType);
    
    // Check if early bird is still valid
    if (ticketType === 'earlybird' && !isEarlyBirdValid()) {
        const expiredMessages = {
            es: 'Lo sentimos, la oferta Early Bird ha expirado. Por favor, selecciona la entrada general.',
            de: 'Entschuldigung, das Frühbucher-Angebot ist abgelaufen. Bitte wählen Sie den allgemeinen Eintritt.',
            en: 'Sorry, the Early Bird offer has expired. Please select the general entry.'
        };
        alert(expiredMessages[currentLanguage]);
        return;
    }
    
    const ticketPrice = ticketType === 'earlybird' ? 12 : 15;
    const extraPrice = ticketType === 'earlybird' ? 4 : 6;
    
    const quantity = parseInt(document.getElementById(`${ticketType}-quantity`).value);
    const extras = parseInt(document.getElementById(`${ticketType}-extras`).value);
    
    const ticketsCost = quantity * ticketPrice;
    const extrasCost = extras * extraPrice;
    const total = ticketsCost + extrasCost;
    
    // Store purchase data globally
    window.currentPurchase = {
        ticketType: ticketType,
        quantity: quantity,
        extras: extras,
        ticketPrice: ticketPrice,
        extraPrice: extraPrice,
        ticketsCost: ticketsCost,
        extrasCost: extrasCost,
        total: total,
        language: currentLanguage
    };
    
    console.log('Purchase data:', window.currentPurchase);
    
    // Create PayPal payment
    createPayPalPayment();
}

// Create PayPal payment
function createPayPalPayment() {
    if (!window.currentPurchase) {
        console.error('No purchase data available');
        return;
    }
    
    const purchase = window.currentPurchase;
    
    const ticketNames = {
        es: {
            'general': 'Entrada General - Bingo Pachanguero 2025',
            'earlybird': 'Early Bird - Bingo Pachanguero 2025'
        },
        de: {
            'general': 'Allgemeiner Eintritt - Bingo Pachanguero 2025',
            'earlybird': 'Frühbucher - Bingo Pachanguero 2025'
        },
        en: {
            'general': 'General Entry - Bingo Pachanguero 2025',
            'earlybird': 'Early Bird - Bingo Pachanguero 2025'
        }
    };
    
    const itemName = `${purchase.quantity}x ${ticketNames[currentLanguage][purchase.ticketType]}${purchase.extras > 0 ? ` + ${purchase.extras} Extra Cards` : ''}`;
    
    console.log('Creating PayPal payment for:', itemName, 'Total:', purchase.total);
    
    // Clear any existing PayPal buttons
    const container = document.getElementById('paypal-button-container');
    if (!container) {
        console.error('PayPal container not found');
        return;
    }
    
    container.innerHTML = '';
    container.style.display = 'block';
    
    // Check if PayPal is loaded
    if (typeof paypal === 'undefined') {
        console.error('PayPal SDK not loaded');
        alert('PayPal is not available. Please refresh the page and try again.');
        return;
    }
    
    // Render PayPal button
    paypal.Buttons({
        createOrder: function(data, actions) {
            console.log('Creating PayPal order for amount:', purchase.total);
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: purchase.total.toString(),
                        currency_code: 'EUR'
                    },
                    description: itemName
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                console.log('PayPal payment completed:', details);
                
                // Get buyer name from PayPal response
                const buyerName = details.payer.name.given_name + ' ' + details.payer.name.surname;
                
                // Generate ticket with buyer information
                generateTicketImage(buyerName, details);
                
                // Hide PayPal container
                document.getElementById('paypal-button-container').style.display = 'none';
                
                // Show success message
                const successMessages = {
                    es: '¡Pago exitoso! Tu ticket se está generando...',
                    de: 'Zahlung erfolgreich! Ihr Ticket wird generiert...',
                    en: 'Payment successful! Your ticket is being generated...'
                };
                alert(successMessages[currentLanguage]);
                
                // Redirect to thank you page after a delay
                setTimeout(() => {
                    window.location.href = 'thank-you.html';
                }, 3000);
            });
        },
        onError: function(err) {
            console.error('PayPal payment error:', err);
            const errorMessages = {
                es: 'Error en el pago. Por favor, inténtalo de nuevo.',
                de: 'Zahlungsfehler. Bitte versuchen Sie es erneut.',
                en: 'Payment failed. Please try again.'
            };
            alert(errorMessages[currentLanguage]);
            document.getElementById('paypal-button-container').style.display = 'none';
        },
        onCancel: function(data) {
            console.log('PayPal payment cancelled:', data);
            document.getElementById('paypal-button-container').style.display = 'none';
        }
    }).render('#paypal-button-container').catch(function(err) {
        console.error('PayPal button render error:', err);
        alert('Error loading PayPal. Please refresh the page and try again.');
    });
}

// Generate ticket image using the template
function generateTicketImage(buyerName, paymentDetails) {
    const purchase = window.currentPurchase;
    if (!purchase) return;
    
    console.log('Generating ticket for:', buyerName);
    
    const canvas = document.getElementById('ticket-canvas');
    if (!canvas) {
        console.error('Ticket canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    const templateImg = new Image();
    templateImg.crossOrigin = 'anonymous';
    
    templateImg.onload = function() {
        canvas.width = templateImg.width;
        canvas.height = templateImg.height;
        ctx.drawImage(templateImg, 0, 0);
        
        // Add buyer name
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.font = 'bold 24px Arial';
        ctx.fillText(buyerName, canvas.width / 2, 200);
        
        // Add ticket information text
        ctx.font = '16px Arial';
        const ticketInfo = translations[currentLanguage]['ticket-info'] || translations['es']['ticket-info'];
        const lines = ticketInfo.split('\n');
        let yPosition = 300;
        
        lines.forEach(line => {
            if (line.trim()) {
                ctx.fillText(line, canvas.width / 2, yPosition);
                yPosition += 25;
            } else {
                yPosition += 15;
            }
        });
        
        // Add purchase details
        ctx.font = 'bold 18px Arial';
        yPosition += 30;
        const ticketTypeText = purchase.ticketType === 'earlybird' ? 'Early Bird' : 'General Entry';
        ctx.fillText(`${purchase.quantity}x ${ticketTypeText}`, canvas.width / 2, yPosition);
        
        if (purchase.extras > 0) {
            yPosition += 25;
            ctx.fillText(`${purchase.extras}x Extra Bingo Cards`, canvas.width / 2, yPosition);
        }
        
        yPosition += 25;
        ctx.fillText(`Total: €${purchase.total}`, canvas.width / 2, yPosition);
        
        yPosition += 40;
        ctx.font = '12px Arial';
        ctx.fillText(`Payment ID: ${paymentDetails.id}`, canvas.width / 2, yPosition);
        
        // Convert canvas to blob and download
        canvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `bingo-pachanguero-2025-ticket-${buyerName.replace(/\s+/g, '-')}-${Date.now()}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            console.log('Ticket downloaded successfully');
        }, 'image/png');
    };
    
    templateImg.onerror = function() {
        console.error('Failed to load ticket template image');
        alert('Ticket template could not be loaded. Please contact support.');
    };
    
    templateImg.src = 'images/Bingo_Ticket_Generator.png';

    
    const ticketsTotal = ticketPrice * ticketQuantity;
    const extrasTotal = extraCardPrice * extraQuantity;
    const grandTotal = ticketsTotal + extrasTotal;
    
    // Update displays
    document.getElementById('ticketsPriceDisplay').textContent = `€${ticketsTotal}`;
    document.getElementById('extraCardsPriceDisplay').textContent = `€${extrasTotal}`;
    document.getElementById('totalPriceDisplay').textContent = `€${grandTotal}`;
    
    // Show/hide extra cards row
    const extraCardsRow = document.getElementById('extraCardsRow');
    if (extraQuantity > 0) {
        extraCardsRow.style.display = 'flex';
    } else {
        extraCardsRow.style.display = 'none';
    }
    
    // Update extra card price text
    const extraPriceText = translations[currentLanguage]['extra-card-price']
        .replace('€4', `€${extraCardPrice}`)
        .replace('Early Bird', currentTicketType === 'earlybird' ? 
            translations[currentLanguage]['earlybird-ticket'] : 
            translations[currentLanguage]['general-ticket']);
    
    const extraCardPriceElement = document.getElementById('extraCardPrice');
    if (extraCardPriceElement) {
        extraCardPriceElement.textContent = extraPriceText;
    }
    
    // Render PayPal button
    renderPayPalButton(grandTotal);
}

// Generate custom ticket PDF with buyer name
async function generateCustomTicketPDF(buyerName, orderDetails) {
    // Load the template image
    const templateImg = new Image();
    templateImg.crossOrigin = 'anonymous';
    
    return new Promise((resolve, reject) => {
        templateImg.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size to match image
            canvas.width = templateImg.width;
            canvas.height = templateImg.height;
            
            // Draw the template
            ctx.drawImage(templateImg, 0, 0);
            
            // Add buyer name (adjust coordinates as needed)
            ctx.font = 'bold 24px Arial';
            ctx.fillStyle = '#000000';
            ctx.textAlign = 'center';
            ctx.fillText(buyerName, canvas.width / 2, 150);
            
            // Add ticket info text
            const infoText = translations[currentLanguage]['ticket-info-text'];
            ctx.font = '16px Arial';
            ctx.fillStyle = '#333333';
            ctx.textAlign = 'left';
            
            const lines = infoText.split('\n');
            let y = 200;
            lines.forEach((line, index) => {
                ctx.fillText(line, 50, y + (index * 25));
            });
            
            // Add ticket details
            ctx.font = 'bold 18px Arial';
            ctx.fillStyle = '#D4AF37';
            ctx.fillText(`${orderDetails.ticketQuantity}x ${orderDetails.ticketType} - €${orderDetails.totalPrice}`, 50, y + (lines.length * 25) + 50);
            
            if (orderDetails.extraQuantity > 0) {
                ctx.fillText(`${orderDetails.extraQuantity}x Extra Cards`, 50, y + (lines.length * 25) + 80);
            }
            
            // Convert canvas to PDF
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `bingo-pachanguero-2025-${buyerName.replace(/\s+/g, '_')}.pdf`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                resolve();
            }, 'image/jpeg', 0.9);
        };
        
        templateImg.onerror = () => {
            console.error('Failed to load ticket template');
            // Fallback: generate simple text ticket
            generateSimpleTicketPDF(buyerName, orderDetails);
            resolve();
        };
        
        templateImg.src = 'images/Bingo_Ticket_Generator.png';
    });
}

// Fallback simple PDF generation
function generateSimpleTicketPDF(buyerName, orderDetails) {
    const ticketContent = `
BINGO PACHANGUERO 2025 - WHITE PARTY
Entry Ticket

Name: ${buyerName}
Ticket Type: ${orderDetails.ticketType}
Quantity: ${orderDetails.ticketQuantity}
Extra Cards: ${orderDetails.extraQuantity}
Total Price: €${orderDetails.totalPrice}

Date: 25 October 2025
Time: 8:00 PM
Location: Tanzhalle Freiburg

${translations[currentLanguage]['ticket-info-text']}

Ticket ID: ${Math.random().toString(36).substring(2, 15)}
    `;
    
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bingo-pachanguero-2025-${buyerName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Render PayPal button
function renderPayPalButton(totalAmount) {
    const container = document.getElementById('paypal-button-container');
    if (!container) return;
    
    // Clear existing button
    container.innerHTML = '';
    
    // PayPal button configuration
    if (window.paypal) {
        paypal.Buttons({
            createOrder: function(data, actions) {
                const ticketTypeName = currentTicketType === 'earlybird' ? 
                    translations[currentLanguage]['earlybird-ticket'] : 
                    translations[currentLanguage]['general-ticket'];
                
                let itemList = [{
                    name: `${ticketQuantity}x ${ticketTypeName}`,
                    unit_amount: {
                        currency_code: 'EUR',
                        value: (currentTicketType === 'earlybird' ? 12 : 15).toString()
                    },
                    quantity: ticketQuantity.toString()
                }];
                
                if (extraQuantity > 0) {
                    itemList.push({
                        name: `${extraQuantity}x Extra Bingo Cards`,
                        unit_amount: {
                            currency_code: 'EUR',
                            value: (currentTicketType === 'earlybird' ? 4 : 6).toString()
                        },
                        quantity: extraQuantity.toString()
                    });
                }
                
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: 'EUR',
                            value: totalAmount.toString(),
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: totalAmount.toString()
                                }
                            }
                        },
                        items: itemList,
                        description: 'Bingo Pachanguero 2025 - White Party Tickets'
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    console.log('Payment completed:', details);
                    
                    // Get buyer name from PayPal response
                    const buyerName = details.payer.name.given_name + ' ' + details.payer.name.surname;
                    
                    // Prepare order details
                    const orderDetails = {
                        ticketType: currentTicketType === 'earlybird' ? 
                            translations[currentLanguage]['earlybird-ticket'] : 
                            translations[currentLanguage]['general-ticket'],
                        ticketQuantity: ticketQuantity,
                        extraQuantity: extraQuantity,
                        totalPrice: totalAmount,
                        paypalOrderId: details.id
                    };
                    
                    // Generate custom ticket PDF
                    generateCustomTicketPDF(buyerName, orderDetails).then(() => {
                        // Redirect to thank you page
                        window.location.href = 'thank-you.html';
                    });
                });
            },
            onError: function(err) {
                console.error('PayPal error:', err);
                alert('Payment error. Please try again.');
            },
            onCancel: function(data) {
                console.log('Payment cancelled:', data);
            }
        }).render('#paypal-button-container');
    } else {
        // Fallback if PayPal SDK is not loaded
        container.innerHTML = '<p>Loading payment options...</p>';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing language:', currentLanguage);
    
    // Small delay to ensure all elements are rendered
    setTimeout(() => {
        // Initialize language and content
        updateContent();
        updateActiveLanguageButton();
        
        // Initialize price calculations for both ticket types
        if (document.getElementById('earlybird-quantity')) {
            calculateTotal('earlybird');
            calculateTotal('general');
        }
        
        // Force another content update to ensure everything is translated
        setTimeout(() => {
            updateContent();
        }, 100);
    }, 50);
    
    // Hide early bird if expired
    if (!isEarlyBirdValid()) {
        const earlyBirdCard = document.getElementById('earlybird-card');
        if (earlyBirdCard) {
            earlyBirdCard.style.display = 'none';
        }
    }
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
    
    // Debug: Check if PayPal SDK is loaded
    if (typeof paypal !== 'undefined') {
        console.log('PayPal SDK loaded successfully');
    } else {
        console.warn('PayPal SDK not loaded');
    }
});

// Add dynamic CSS styles
const style = document.createElement('style');
style.textContent = `
    .language-switcher {
        display: flex;
        gap: 0.5rem;
        margin-left: 2rem;
    }
    
    .lang-btn {
        background: transparent;
        border: 2px solid #D4AF37;
        color: #000;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
        transition: all 0.3s ease;
    }
    
    .lang-btn:hover,
    .lang-btn.active {
        background: #D4AF37;
        color: #000;
    }
    
    .ticket-selection {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
    }
    
    .ticket-options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 2rem 0;
    }
    
    .ticket-option input[type="radio"] {
        display: none;
    }
    
    .ticket-option label.ticket-card {
        cursor: pointer;
        transition: all 0.3s ease;
        border: 3px solid transparent;
    }
    
    .ticket-option input[type="radio"]:checked + label.ticket-card {
        border-color: #D4AF37;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
    }
    
    .quantity-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 3rem 0;
    }
    
    .quantity-controls {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin: 1rem 0;
    }
    
    .quantity-controls button {
        width: 40px;
        height: 40px;
        border: 2px solid #D4AF37;
        background: white;
        color: #D4AF37;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .quantity-controls button:hover {
        background: #D4AF37;
        color: white;
    }
    
    .quantity-controls input {
        width: 80px;
        text-align: center;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        font-size: 1.1rem;
    }
    
    .price-summary {
        background: #f9f9f9;
        padding: 2rem;
        border-radius: 8px;
        border-left: 4px solid #D4AF37;
        margin: 2rem 0;
    }
    
    .price-breakdown {
        margin-top: 1rem;
    }
    
    .price-item {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        font-size: 1.1rem;
    }
    
    .price-item.total {
        font-weight: bold;
        font-size: 1.3rem;
        color: #D4AF37;
    }
    
    .payment-section {
        margin: 2rem 0;
        text-align: center;
    }
    
    #paypal-button-container {
        max-width: 400px;
        margin: 0 auto;
    }
    
    @media (max-width: 768px) {
        .ticket-options {
            grid-template-columns: 1fr;
        }
        
        .quantity-section {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
        
        .language-switcher {
            margin-left: 1rem;
            gap: 0.3rem;
        }
        
        .lang-btn {
            padding: 6px 10px;
            font-size: 0.8rem;
        }
    }
`;
document.head.appendChild(style);