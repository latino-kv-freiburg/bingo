// Multi-language support with updated translations
const translations = {
    es: { // Spanish (default)
        home: 'Inicio',
        tickets: 'Entradas',
        contact: 'Contacto',
        title: 'Bingo Pachanguero 2026',
        'anniversary-title': '5 AÑOS',
        'anniversary-subtitle': 'CELEBRANDO LO QUE NOS UNE',
        'white-party': 'Celebración de 5 años',
        subtitle: '24 de Octubre 2026 – Tanzhalle Freiburg',
        description: '✨ ¡Celebramos 5 años de Bingo Pachanguero! ✨<br>Prepárate para una noche que lo tiene TODO: música, baile, comida y mucha diversión.<br><br>🔥 Este año venimos con más sorpresas que nunca:<br>🎶 Fiesta crossover con la mejor energía para no parar de bailar<br>🍴 Auténticas delicias latinas que te harán agua la boca<br>💃 Animación y show de Salsa Caleña en vivo con Ritmo y Kandela<br>🎁 Y el gran protagonista… ¡nuestro Bingo con premios increíbles!<br><br>👉 No te lo pierdas: reserva tu lugar ahora y celebra lo que nos une.',
        'program-title': 'Programa',
        'program-content': '<table class="program-table"><tr><td>20:00</td><td>Bienvenida</td></tr><tr><td>21:00</td><td>1er juego de Bingo</td></tr><tr><td>22:00</td><td>2do juego de Bingo</td></tr><tr><td>23:00</td><td>3er juego de Bingo</td></tr><tr><td>00:00</td><td>Salsa Caleña: Show de medianoche, workshop & animación con Ritmo y Kandela</td></tr><tr><td>01:00</td><td>4to juego de Bingo</td></tr><tr><td>03:00</td><td>Fiesta y baile hasta el final</td></tr></table>',
        'location-title': 'Ubicación',
        'location-address': 'Tanzhalle Freiburg, Markgrafenstr. 38, 79115 Freiburg im Breisgau',
        'reservation-info': 'Para reservas gastronómicas: Henry +49 176 868 15317',
        'cta-button': 'Compra tu ticket',
        'tickets-at-entrance': 'Entradas disponibles en la puerta',
        'tickets-closed-title': 'Las ventas en línea han terminado',
        'tickets-closed-info': '¡El evento es hoy! Las entradas están disponibles en la entrada.',
        'tickets-closed-details': 'Tanzhalle Freiburg<br>Apertura de puertas: 19:30<br>Inicio del evento: 20:00',
        footer: '© 2026 Latino KV Freiburg – Bingo Pachanguero',
        'tickets-title': 'Entradas',
        'tickets-subtitle': '¡Elige tu entrada y prepárate para una noche increíble!',
        'tickets-page-title': 'Entradas - Bingo Pachanguero 2026',
        'contact-title': 'Contáctanos',
        'contact-text': 'Para preguntas sobre el Bingo Pachanguero, contáctanos!',
        'general-ticket': 'Entrada General',
        'earlybird-ticket': 'Early Bird',
        'entry-feature': 'Entrada al evento',
        'bingo-card-included': '1 carta de bingo incluida',
        'valid-until': 'Promoción válida hasta el 11 de Octubre<br>Después de esta fecha el precio será de 15€',
        'save-feature': 'Ahorra €3 con reserva anticipada',
        'select-ticket-type': 'Selecciona tipo de entrada',
        'select-quantity': 'Número de entradas',
        'select-extra-cards': 'Cartas extra de bingo',
        'extra-cards-help': 'Cartas adicionales para aumentar tus posibilidades (opcional)',
        'extra-card-price': '4€ por carta extra',
        'price-summary': 'Resumen del precio',
        'tickets-label': 'Entradas:',
        'extra-cards-label': 'Cartas extra:',
        'total-label': 'Total:',
        'important-info': 'Información Importante',
        'dress-code': 'Código de vestimenta: Te recomendamos venir con vestimenta blanca',
        'event-date': 'Fecha del evento: 24 de Octubre 2026',
        'event-location': 'Ubicación: Tanzhalle Freiburg',
        'non-refundable': 'Las entradas no son reembolsables',
        'limited-capacity': 'Capacidad limitada - ¡reserva pronto!',
        'food-reservation': 'Para reservas gastronómicas, contacta a Henry: +49 176 868 15317',
        'ticket-quantity': 'Number of tickets:',
        'extra-cards-quantity': 'Extra cards (4€/card):',
        'extra-cards-quantity-6': 'Extra cards (6€/card):',
        'tickets-cost': 'Tickets:',
        'extras-cost': 'Extra cards:',
        'total-cost': 'Total:',
        'extra-cards-4': 'Extra cards: 4€/card',
        'extra-cards-6': 'Extra cards: 6€/card',
        'reservation-info': 'For dining reservations: Henry +49 176 868 15317',
        'ticket-info': `Thank you for your purchase! Some important information:

Come in your best white outfit
On event day you will receive your bingo card at reception
You have the option to purchase an additional bingo card during the event for 6€
So everyone can enjoy the food, we recommend reserving in advance with Henry: +49 176 868 15317
Cancellation is not possible

We wish you lots of success at Bingo Pachanguero!`,
        'buy-paypal': 'Comprar Entrada',
        'payment-instructions-title': 'Instrucciones de Pago',
        'paypal-option': 'Opción 1: PayPal',
        'paypal-instructions': 'Envía el pago a nuestra cuenta PayPal:',
        'paypal-email': 'Email PayPal:',
        'payment-concept': 'Concepto:',
        'total-amount': 'Monto total:',
        'send-paypal': 'Enviar vía PayPal.me',
        'bank-option': 'Opción 2: Transferencia Bancaria',
        'bank-instructions': 'Transfiere a nuestra cuenta bancaria:',
        'account-holder': 'Titular:',
        'bank-name': 'Banco:',
        'payment-note': '<strong>Importante:</strong> Una vez realizado el pago, envíanos un email a <a href=\"mailto:latinokvfreiburginfo@gmail.com\">latinokvfreiburginfo@gmail.com</a> con el comprobante para procesar tu entrada.',
        'ticket-quantity': 'Número de entradas:',
        'extra-cards-quantity': 'Cartas extra (4€/carta):',
        'extra-cards-quantity-6': 'Cartas extra (6€/carta):',
        'tickets-cost': 'Entradas:',
        'extras-cost': 'Cartas extra:',
        'total-cost': 'Total:',
        'extra-cards-4': 'Cartas extra: 4€/carta<br>(6€/carta después del 11 de Octubre)',
        'extra-cards-6': 'Cartas extra: 6€/carta',
        'earlybird-price': '12€',
        'general-price': '15€',
        'reservation-info': 'Para reservas gastronómicas: Henry +49 176 868 15317',
        'ticket-info': `¡Gracias por tu compra! Información importante:

Ven con tu mejor atuendo blanco
El día del evento recibirás tu carta de bingo en recepción
Puedes comprar una carta de bingo adicional durante el evento por 6€
Para que todos puedan disfrutar de la comida, recomendamos reservar con Henry: +49 176 868 15317
No es posible cancelar

¡Te deseamos mucho éxito en el Bingo Pachanguero!`,
        // Thank you page translations
        'thanks-title': '¡Gracias por tu compra!',
        'thanks-message': 'Tu entrada para el Bingo Pachanguero 2026 ha sido procesada exitosamente.',
        'what-next-title': '¿Qué sigue?',
        'pdf-info': 'Tu ticket en PDF se ha descargado automáticamente',
        // Legal sections
        'impressum-title': 'Información Legal',
        'responsible-entity': 'Entidad Responsable',
        'association-name': 'Latino KV Freiburg',
        'association-address': 'Sautierstraße 49, 79104 Freiburg',
        'non-commercial': 'Este es un sitio web sin fines comerciales creado exclusivamente con fines culturales.',
        'revenue-usage': 'Los ingresos se utilizan exclusivamente para cubrir los costos del evento.',
        'privacy-title': 'Política de Privacidad',
        'privacy-intro': 'Protección de datos personales',
        'no-data-collection': 'Este sitio web no recopila, almacena ni procesa datos personales.',
        'maps-notice': 'Utilizamos un marco de Google Maps integrado para mostrar la ubicación del evento.',
        'google-privacy': 'Google Maps puede recopilar datos de acuerdo con la política de privacidad de Google.',
        'privacy-policy-link': 'Consulte la política de privacidad de Google',
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
        'contact-info': 'Para preguntas, contáctanos en latinokvfreiburginfo@gmail.com',
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
        // Legal sections
        'impressum-title': 'Impressum',
        'responsible-entity': 'Verantwortliche Organisation',
        'association-name': 'Latino KV Freiburg',
        'association-address': 'Sautierstraße 49, 79104 Freiburg',
        'non-commercial': 'Dies ist eine nicht-kommerzielle Website, die ausschließlich für kulturelle Zwecke erstellt wurde.',
        'revenue-usage': 'Die Einnahmen dienen ausschließlich zur Kostendeckung der Veranstaltung.',
        'privacy-title': 'Datenschutz',
        'privacy-intro': 'Datenschutzerklärung',
        'no-data-collection': 'Diese Website sammelt, speichert oder verarbeitet keine personenbezogenen Daten.',
        'maps-notice': 'Wir verwenden einen eingebetteten Google Maps-Frame, um den Veranstaltungsort anzuzeigen.',
        'google-privacy': 'Google Maps kann Daten gemäß der Datenschutzerklärung von Google erfassen.',
        'privacy-policy-link': 'Google Datenschutzerklärung ansehen',
        home: 'Startseite',
        tickets: 'Tickets',
        contact: 'Kontakt',
        title: 'Bingo Pachanguero 2026',
        'anniversary-title': '5 JAHRE',
        'anniversary-subtitle': 'WAS UNS VERBINDET, FEIERN',
        'white-party': '5 Jahre feiern',
        subtitle: '24. Oktober 2026 – Tanzhalle Freiburg',
        description: '✨ Wir feiern 5 Jahre Bingo Pachanguero! ✨<br>Freut euch auf eine unvergessliche Nacht voller Musik, Tanz, Essen und Spaß.<br><br>🔥 Dieses Jahr erwarten euch noch mehr Highlights:<br>🎶 Crossover-Party mit der besten Stimmung und heißen Rhythmen<br>🍴 Leckere lateinamerikanische Spezialitäten<br>💃 Live-Show und Animation von Ritmo y Kandela mit Salsa Caleña<br>🎁 Und natürlich: unser Bingo mit fantastischen Preisen!<br><br>👉 Sichert euch jetzt euren Platz und feiert, was uns verbindet.',
        'program-title': 'Programm',
        'program-content': '<table class="program-table"><tr><td>20:00</td><td>Begrüßung</td></tr><tr><td>21:00</td><td>1. Bingo-Spiel</td></tr><tr><td>22:00</td><td>2. Bingo-Spiel</td></tr><tr><td>23:00</td><td>3. Bingo-Spiel</td></tr><tr><td>00:00</td><td>Salsa Caleña: Mitternachtsshow, Workshop & Animation mit Ritmo y Kandela</td></tr><tr><td>01:00</td><td>4. Bingo-Spiel</td></tr><tr><td>03:00</td><td>Party und Tanzen bis zum Ende</td></tr></table>',
        'location-title': 'Standort',
        'location-address': 'Tanzhalle Freiburg, Markgrafenstr. 38, 79115 Freiburg im Breisgau',
        'reservation-info': 'Für Essensreservierung kontaktiert Henry: +49 176 868 15317',
        'cta-button': 'Ticket kaufen',
        footer: '© 2026 Latino KV Freiburg – Bingo Pachanguero',
        'tickets-title': 'Tickets',
        'tickets-subtitle': 'Wähle dein Ticket und bereite dich auf eine fantastische Nacht vor!',
        'tickets-page-title': 'Tickets - Bingo Pachanguero 2026',
        'contact-title': 'Kontakt',
        'contact-text': 'Für Fragen zum Bingo Pachanguero kontaktiert uns!',
        'general-ticket': 'Allgemeiner Eintritt',
        'earlybird-ticket': 'Frühbucher',
        'entry-feature': 'Eintritt zur Veranstaltung',
        'bingo-card-included': '1 Bingo-Karte inklusive',

        'valid-until': 'Angebot gültig bis 11. Oktober<br>Nach diesem Datum kostet das Ticket 15€',
        'save-feature': '€3 sparen mit Frühbuchung',
        'select-ticket-type': 'Ticket-Typ wählen',
        'select-quantity': 'Anzahl der Tickets',
        'select-extra-cards': 'Extra Bingo-Karten',
        'extra-cards-help': 'Zusätzliche Karten für bessere Gewinnchancen (optional)',
        'extra-card-price': '4€ pro Extra-Karte',
        'price-summary': 'Preisübersicht',
        'tickets-label': 'Tickets:',
        'extra-cards-label': 'Extra-Karten:',
        'total-label': 'Gesamt:',
        'important-info': 'Wichtige Informationen',
        'dress-code': 'Dress-Code: Wir empfehlen weiße Kleidung',
        'event-date': 'Veranstaltungsdatum: 24. Oktober 2026',
        'event-location': 'Ort: Tanzhalle Freiburg',
        'non-refundable': 'Tickets sind nicht erstattungsfähig',
        'limited-capacity': 'Begrenzte Kapazität - früh buchen!',
        'food-reservation': 'Für Essensreservierung kontaktiert Henry: +49 176 868 15317',
        'buy-paypal': 'Ticket kaufen',
        'payment-instructions-title': 'Zahlungsanweisungen',
        'paypal-option': 'Option 1: PayPal',
        'paypal-instructions': 'Senden Sie die Zahlung an unser PayPal-Konto:',
        'paypal-email': 'PayPal E-Mail:',
        'payment-concept': 'Verwendungszweck:',
        'total-amount': 'Gesamtbetrag:',
        'send-paypal': 'Über PayPal.me senden',
        'bank-option': 'Option 2: Banküberweisung',
        'bank-instructions': 'Überweisen Sie auf unser Bankkonto:',
        'account-holder': 'Kontoinhaber:',
        'bank-name': 'Bank:',
        'payment-note': '<strong>Wichtig:</strong> Nach der Zahlung senden Sie uns eine E-Mail an <a href=\"mailto:latinokvfreiburginfo@gmail.com\">latinokvfreiburginfo@gmail.com</a> mit dem Zahlungsnachweis, um Ihr Ticket zu bearbeiten.',
        'ticket-quantity': 'Anzahl der Tickets:',
        'extra-cards-quantity': 'Extra-Karten (4€/Karte):',
        'extra-cards-quantity-6': 'Extra-Karten (6€/Karte):',
        'tickets-cost': 'Tickets:',
        'extras-cost': 'Extra-Karten:',
        'total-cost': 'Gesamt:',
        'extra-cards-4': 'Extra-Karten: 4€/Karte<br>(6€/Karte nach dem 11. Oktober)',
        'extra-cards-6': 'Extra-Karten: 6€/Karte',
        'earlybird-price': '12€',
        'general-price': '15€',
        // Thank you page translations
        'thanks-title': 'Vielen Dank für Ihren Kauf!',
        'thanks-message': 'Ihr Ticket für die Bingo Pachanguero 2026 wurde erfolgreich verarbeitet.',
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
        'contact-info': 'Bei Fragen kontaktieren Sie uns unter latinokvfreiburginfo@gmail.com',
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
        // Legal sections
        'impressum-title': 'Legal Notice',
        'responsible-entity': 'Responsible Entity',
        'association-name': 'Latino KV Freiburg',
        'association-address': 'Sautierstraße 49, 79104 Freiburg',
        'non-commercial': 'This is a non-commercial website created solely for cultural purposes.',
        'revenue-usage': 'All revenue is used exclusively to cover event costs.',
        'privacy-title': 'Privacy Policy',
        'privacy-intro': 'Data Protection Information',
        'no-data-collection': 'This website does not collect, store, or process personal data.',
        'maps-notice': 'We use an embedded Google Maps frame to display the event location.',
        'google-privacy': 'Google Maps may collect data according to Google\'s privacy policy.',
        'privacy-policy-link': 'View Google Privacy Policy',
        home: 'Home',
        tickets: 'Tickets',
        contact: 'Contact',
        title: 'Bingo Pachanguero 2026',
        'anniversary-title': '5 YEARS',
        'anniversary-subtitle': 'CELEBRATING WHAT UNITES US',
        'white-party': '5 years of celebration',
        subtitle: '25th October 2026 – Tanzhalle Freiburg',
        description: '✨ We are celebrating 5 years of Bingo Pachanguero! ✨<br>Get ready for a night packed with music, dancing, food, and fun.<br><br>🔥 This year comes with even more surprises:<br>🎶 Crossover party with the best vibes and non-stop dancing<br>🍴 Delicious Latin food that will make your mouth water<br>💃 Live Salsa Caleña show and animation by Ritmo y Kandela<br>🎁 And of course… our Bingo with amazing prizes!<br><br>👉 Don\'t miss it: book your spot now and celebrate what unites us.',
        'program-title': 'Program',
        'program-content': '<table class="program-table"><tr><td>20:00</td><td>Welcome</td></tr><tr><td>21:00</td><td>1st Bingo Game</td></tr><tr><td>22:00</td><td>2nd Bingo Game</td></tr><tr><td>23:00</td><td>3rd Bingo Game</td></tr><tr><td>00:00</td><td>Salsa Caleña: Midnight show, workshop & animation with Ritmo y Kandela</td></tr><tr><td>01:00</td><td>4th Bingo Game</td></tr><tr><td>03:00</td><td>Party and dancing until the end</td></tr></table>',
        'location-title': 'Location',
        'location-address': 'Tanzhalle Freiburg, Markgrafenstr. 38, 79115 Freiburg im Breisgau',
        'reservation-info': 'For dining reservations: Henry +49 176 868 15317',
        'cta-button': 'Get your ticket',
        footer: '© 2026 Latino KV Freiburg – Bingo Pachanguero',
        'tickets-title': 'Tickets',
        'tickets-subtitle': 'Choose your ticket and get ready for an amazing night!',
        'tickets-page-title': 'Tickets - Bingo Pachanguero 2026',
        'contact-title': 'Contact us',
        'contact-text': 'For questions about the Bingo Pachanguero, contact us!',
        'general-ticket': 'General Entry',
        'earlybird-ticket': 'Early Bird',
        'entry-feature': 'Entry to the event',
        'bingo-card-included': '1 bingo card included',
        'valid-until': 'Offer valid until October 11th<br>After this date the price will be 15€',
        'save-feature': 'Save 3€ with early booking',
        'select-ticket-type': 'Select ticket type',
        'select-quantity': 'Number of tickets',
        'select-extra-cards': 'Extra bingo cards',
        'extra-cards-help': 'Additional cards to increase your chances (optional)',
        'extra-card-price': '4€ per extra card',
        'price-summary': 'Price Summary',
        'tickets-label': 'Tickets:',
        'extra-cards-label': 'Extra cards:',
        'total-label': 'Total:',
        'important-info': 'Important Information',
        'dress-code': 'Dress code: We recommend white attire',
        'event-date': 'Event date: 25th October 2026',
        'event-location': 'Location: Tanzhalle Freiburg',
        'non-refundable': 'Tickets are non-refundable',
        'limited-capacity': 'Limited capacity - book early!',
        'food-reservation': 'For food reservations, contact Henry: +49 176 868 15317',
        'buy-paypal': 'Buy Ticket',
        'ticket-quantity': 'Number of tickets:',
        'extra-cards-quantity': 'Extra cards (4€/card):',
        'extra-cards-quantity-6': 'Extra cards (6€/card):',
        'tickets-cost': 'Tickets:',
        'extras-cost': 'Extra cards:',
        'total-cost': 'Total:',
        'extra-cards-4': 'Extra cards: 4€/card<br>(6€/card after October 11th)',
        'extra-cards-6': 'Extra cards: 6€/card',
        'earlybird-price': '12€',
        'general-price': '15€',
        'select-extra-cards': 'Extra bingo cards',
        'extra-cards-help': 'Additional cards to increase your chances (optional)',
        'extra-card-price': '4€ per extra card (Early Bird)',
        'price-summary': 'Price Summary',
        'tickets-label': 'Tickets:',
        'extra-cards-label': 'Extra cards:',
        'total-label': 'Total:',
        'important-info': 'Important Information',
        'dress-code': 'Dress code: We recommend white attire',
        'event-date': 'Event date: 25th October 2026',
        'event-location': 'Location: Tanzhalle Freiburg',
        'non-refundable': 'Tickets are non-refundable',
        'limited-capacity': 'Limited capacity - book early!',
        'food-reservation': 'To reserve food, contact Henry: +49 176 868 15317',
        // Thank you page translations
        'thanks-title': 'Thank you for your purchase!',
        'thanks-message': 'Your ticket for the Bingo Pachanguero 2026 has been successfully processed.',
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
        'contact-info': 'For questions, contact us at latinokvfreiburginfo@gmail.com',
        'back-home': 'Back to home',
        'buy-more': 'Buy more tickets',
        // Payment modal translations
        'payment-instructions-title': 'Payment Instructions',
        'paypal-option': 'Option 1: PayPal',
        'paypal-instructions': 'Send payment to our PayPal account:',
        'paypal-email': 'PayPal Email:',
        'payment-concept': 'Payment reference:',
        'total-amount': 'Total amount:',
        'send-paypal': 'Send via PayPal.me',
        'bank-option': 'Option 2: Bank Transfer',
        'bank-instructions': 'Transfer to our bank account:',
        'account-holder': 'Account holder:',
        'bank-name': 'Bank:',
        'payment-note': '<strong>Important:</strong> After payment, send us an email to <a href=\"mailto:latinokvfreiburginfo@gmail.com\">latinokvfreiburginfo@gmail.com</a> with the payment receipt to process your ticket.',
        // Ticket info text
        'ticket-info-text': `Thank you for your purchase! Important information:

Come in your best white outfit
On event day you'll receive your bingo card at reception
You'll have the opportunity to buy an additional bingo card during the event for 6€
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
            // Use innerHTML for elements that contain HTML tags or specific content types
            if (element.innerHTML.includes('<a') || element.innerHTML.includes('<svg') || 
                key === 'description' || key === 'program-content' || key === 'contact-text' || 
                key === 'payment-note' || translation.includes('<br>') || translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
            console.log('Updated element:', key, 'to:', translation);
        } else {
            console.warn('No translation found for key:', key, 'in language:', currentLanguage);
            // If no translation found, keep existing content or use Spanish as fallback
            if (translations['es'] && translations['es'][key] && !element.textContent.trim()) {
                if (key === 'description' || key === 'program-content' || key === 'contact-text' || 
                    key === 'payment-note' || translations['es'][key].includes('<br>') || translations['es'][key].includes('<')) {
                    element.innerHTML = translations['es'][key];
                } else {
                    element.textContent = translations['es'][key];
                }
                console.log('Used Spanish fallback for:', key);
            }
        }
    });
    
    // Force update the page title as well
    const titleElement = document.querySelector('title[data-lang], title');
    const titleKey = titleElement?.getAttribute('data-lang');
    if (titleElement && titleKey && translations[currentLanguage]?.[titleKey]) {
        titleElement.textContent = translations[currentLanguage][titleKey];
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
    const deadline = new Date('2026-10-11');
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
    document.getElementById(`${ticketType}-tickets-cost`).textContent = `${ticketsCost}€`;
    document.getElementById(`${ticketType}-extras-cost`).textContent = `${extrasCost}€`;
    document.getElementById(`${ticketType}-total`).textContent = `${total}€`;
    
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
    
    // Show payment instructions modal
    showPaymentModal();
}

// Show payment modal with instructions
function showPaymentModal() {
    if (!window.currentPurchase) {
        console.error('No purchase data available');
        return;
    }
    
    const purchase = window.currentPurchase;
    
    const ticketNames = {
        es: {
            'general': 'Entrada General - Bingo Pachanguero 2026',
            'earlybird': 'Early Bird - Bingo Pachanguero 2026'
        },
        de: {
            'general': 'Allgemeiner Eintritt - Bingo Pachanguero 2026',
            'earlybird': 'Frühbucher - Bingo Pachanguero 2026'
        },
        en: {
            'general': 'General Entry - Bingo Pachanguero 2026',
            'earlybird': 'Early Bird - Bingo Pachanguero 2026'
        }
    };
    
    const itemName = `${purchase.quantity}x ${ticketNames[currentLanguage][purchase.ticketType]}${purchase.extras > 0 ? ` + ${purchase.extras} Extra Cards` : ''}`;
    
    // Update payment summary
    const paymentSummary = document.getElementById('payment-summary');
    if (paymentSummary) {
        paymentSummary.innerHTML = `
            <h4>${translations[currentLanguage]['payment-concept'] || 'Payment Summary'}</h4>
            <p><strong>${itemName}</strong></p>
            <p>${translations[currentLanguage]['tickets-cost'] || 'Tickets:'} ${purchase.ticketsCost}€</p>
            ${purchase.extras > 0 ? `<p>${translations[currentLanguage]['extras-cost'] || 'Extra cards:'} ${purchase.extrasCost}€</p>` : ''}
        `;
    }
    
    // Update amounts
    const totalAmount = document.getElementById('total-amount');
    if (totalAmount) {
        totalAmount.textContent = `${purchase.total}€`;
    }
    
    // Update bank transfer total amount
    const bankTotalAmount = document.getElementById('bank-total-amount');
    if (bankTotalAmount) {
        bankTotalAmount.textContent = `${purchase.total}€`;
    }
    
    const paymentConcept = document.getElementById('payment-concept');
    if (paymentConcept) {
        paymentConcept.textContent = itemName;
    }
    
    const bankConcept = document.getElementById('bank-concept');
    if (bankConcept) {
        bankConcept.textContent = itemName;
    }
    
    // Update PayPal.me button
    const paypalMeBtn = document.getElementById('paypal-me-btn');
    if (paypalMeBtn) {
        // Format amount for PayPal.me URL
        const formattedAmount = purchase.total.toFixed(2);
        const baseUrl = `https://paypal.me/money2andres/${formattedAmount}EUR`;
        
        paypalMeBtn.onclick = function() {
            // Add payment note as URL parameter
            const paymentNote = encodeURIComponent(itemName);
            const fullUrl = `${baseUrl}?note=${paymentNote}`;
            window.open(fullUrl, '_blank');
        };
    }
    
    // Show modal
    const modal = document.getElementById('payment-instructions');
    if (modal) {
        modal.style.display = 'flex';
        // Apply current language translations
        updateLanguage();
    }
}

// Close payment modal
function closePaymentModal() {
    const modal = document.getElementById('payment-instructions');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Language switching and content updates remain the same as before

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
            a.download = `bingo-pachanguero-2026-ticket-${buyerName.replace(/\s+/g, '-')}-${Date.now()}.png`;
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
        .replace('4€', `€${extraCardPrice}`)
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
                a.download = `bingo-pachanguero-2026-${buyerName.replace(/\s+/g, '_')}.pdf`;
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
BINGO PACHANGUERO 2026
Entry Ticket

Name: ${buyerName}
Ticket Type: ${orderDetails.ticketType}
Quantity: ${orderDetails.ticketQuantity}
Extra Cards: ${orderDetails.extraQuantity}
Total Price: €${orderDetails.totalPrice}

Date: 25th October 2026
Time: 8:00 PM
Location: Tanzhalle Freiburg

${translations[currentLanguage]['ticket-info-text']}

Ticket ID: ${Math.random().toString(36).substring(2, 15)}
    `;
    
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bingo-pachanguero-2026-${buyerName.replace(/\s+/g, '_')}.txt`;
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
                        description: 'Bingo Pachanguero 2026 Tickets'
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
    
    // Hide early bird if expired and show appropriate ticket
    const today = new Date();
    const earlyBirdDeadline = new Date('2026-10-11');
    const isEarlyBirdValid = today <= earlyBirdDeadline;
    
    const earlyBirdCard = document.getElementById('earlybird-card');
    const generalCard = document.querySelector('.ticket-card:not(#earlybird-card)');
    
    if (earlyBirdCard && generalCard) {
        if (isEarlyBirdValid) {
            // Show only early bird
            earlyBirdCard.style.display = 'block';
            generalCard.style.display = 'none';
        } else {
            // Show only general entry
            earlyBirdCard.style.display = 'none';
            generalCard.style.display = 'block';
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
    
    // Video background initialization
    const backgroundVideo = document.querySelector('.background-video');
    
    if (backgroundVideo) {
        // Set video properties explicitly
        backgroundVideo.muted = true;
        backgroundVideo.loop = true;
        backgroundVideo.playsInline = true;
        backgroundVideo.autoplay = true;
        
        // Event listeners for video playback
        backgroundVideo.addEventListener('loadeddata', function() {
            this.play().catch(function(error) {
                console.log('Video autoplay prevented by browser policy');
            });
        });
        
        backgroundVideo.addEventListener('canplay', function() {
            this.play().catch(function(error) {
                console.log('Video play attempt failed');
            });
        });
        
        backgroundVideo.addEventListener('error', function(e) {
            console.error('Video loading error');
            // Hide video container if there's an error
            const videoContainer = document.querySelector('.hero-video-background');
            if (videoContainer) {
                videoContainer.style.display = 'none';
            }
        });
        
        // Initial play attempt
        backgroundVideo.play().catch(function(error) {
            console.log('Initial video play failed, will retry when ready');
        });
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