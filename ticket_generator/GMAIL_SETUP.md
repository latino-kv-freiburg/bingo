# Gmail API Setup Instructions

To enable email functionality for sending tickets, you need to set up Gmail API credentials:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Gmail API:
   - Go to "APIs & Services" > "Library"
   - Search for "Gmail API"
   - Click "Enable"

4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Desktop app" as application type
   - Give it a name (e.g., "Bingo Ticket Generator")
   - Click "Create"

5. Download credentials:
   - Download the OAuth client credentials JSON file
   - Save it as `credentials.json` in the `ticket_generator` directory

6. First run:
   - The first time you run the application with email functionality
   - A browser window will open asking you to log in to your Google account
   - Grant the requested permissions
   - The application will save the token for future use in `token.pickle`
   - Keep `credentials.json` and `token.pickle` beside `gmail_sender.py`; the
     application also checks its launch directory for existing files.

Note: If you get authentication errors or need to use a different Google account:
- An expired or revoked refresh token (`invalid_grant`) makes the application
  open the browser again so you can re-authenticate.
- If re-authentication does not start, delete the `token.pickle` file beside
  `credentials.json` and run the application again.
- If the OAuth consent screen is in Google’s Testing mode, refresh tokens
  typically expire after seven days; publish the app or re-authenticate when
  prompted.

Security Notes:
- Keep your `credentials.json` and `token.pickle` files secure
- Do not commit these files to version control
- Add them to your .gitignore file