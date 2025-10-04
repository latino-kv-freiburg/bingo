"""
Gmail API integration for sending tickets via email.

To set up Gmail API credentials:
1. Go to Google Cloud Console (https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Gmail API for your project
4. Go to APIs & Services > Credentials
5. Create OAuth 2.0 Client ID credentials
6. Download the credentials and save as 'credentials.json' in this directory
7. First run will open browser for authentication
"""

import os
import pickle
from base64 import urlsafe_b64encode
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# If modifying these scopes, delete the token.pickle file.
SCOPES = ['https://www.googleapis.com/auth/gmail.send']

def get_gmail_service():
    """Authenticate and return Gmail API service.
    
    Returns:
        service: Authenticated Gmail API service
    Raises:
        Exception: If authentication fails
    """
    creds = None
    
    # Load token from pickle file if exists
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    
    # If no valid credentials available, authenticate
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                raise Exception(
                    "credentials.json not found. Please follow the setup instructions "
                    "in the comments at the top of this file."
                )
            
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        
        # Save credentials for future use
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    
    try:
        return build('gmail', 'v1', credentials=creds)
    except Exception as e:
        raise Exception(f"Failed to create Gmail service: {str(e)}")

def create_message_with_attachment(sender, to, subject, body_text, file_path):
    """Create email message with attachment.
    
    Args:
        sender: Email address of the sender
        to: Email address of the recipient
        subject: Subject of the email
        body_text: Body text of the email
        file_path: Path to the attachment file
    
    Returns:
        dict: Email message ready for sending
    """
    message = MIMEMultipart()
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject

    # Add body
    message.attach(MIMEText(body_text))
    
    # Add attachment
    with open(file_path, 'rb') as attachment:
        pdf = MIMEApplication(attachment.read(), _subtype='pdf')
        pdf.add_header(
            'Content-Disposition',
            'attachment',
            filename=os.path.basename(file_path)
        )
        message.attach(pdf)
    
    return {'raw': urlsafe_b64encode(message.as_bytes()).decode()}

def send_ticket_via_email(recipient_email, subject, body_text, attachment_file):
    """Send email with ticket attachment using Gmail API.
    
    Args:
        recipient_email: Email address of the recipient
        subject: Subject of the email
        body_text: Body text of the email
        attachment_file: Path to the PDF ticket file
    
    Returns:
        bool: True if email sent successfully
    
    Raises:
        Exception: If sending fails
    """
    try:
        service = get_gmail_service()
        sender_email = service.users().getProfile(userId='me').execute()['emailAddress']
        
        message = create_message_with_attachment(
            sender_email,
            recipient_email,
            subject,
            body_text,
            attachment_file
        )
        
        service.users().messages().send(
            userId='me',
            body=message
        ).execute()
        
        return True
        
    except HttpError as error:
        raise Exception(f"Failed to send email: {error}")
    except Exception as e:
        raise Exception(f"Error sending email: {str(e)}")