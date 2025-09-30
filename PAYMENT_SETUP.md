# Payment System Configuration for Non-Profit Use

## Overview
The payment system has been adapted for non-profit organizations to use personal PayPal accounts instead of business accounts, which is compliant with PayPal's terms for non-profit organizations.

## Changes Made

### 1. Removed PayPal Business Integration
- Removed PayPal SDK script from `tickets.html`
- Removed automatic PayPal checkout flow
- Removed PayPal button rendering code

### 2. Added Payment Instructions Modal
- Added a modal popup with payment instructions
- Provides two payment options: PayPal.me and Bank Transfer
- Shows payment summary and reference details

### 3. PayPal.me Integration
- Uses PayPal.me links for personal account payments
- Automatically generates payment URL with correct amount
- Opens in new tab for user to complete payment

### 4. Manual Payment Processing
- Users receive payment instructions
- They complete payment via PayPal.me or bank transfer
- They email payment confirmation to process tickets

## Configuration

### PayPal Settings
- **PayPal Email**: `andres_r5@hotmail.com`
- **PayPal.me URL**: Automatically generated as `https://paypal.me/money2andres/{amount}EUR`

### Bank Transfer Details
- **IBAN**: DE64 6807 0024 0084 3169 00
- **Account Holder**: Andres Romero
- **Bank**: Deutsche Bank

### Important Notes
1. **PayPal Personal Account**: This setup works with personal PayPal accounts, avoiding business account requirements
2. **Manual Processing**: Requires manual verification of payments via email
3. **Compliance**: Follows PayPal's guidelines for non-profit organizations
4. **User Experience**: Clear instructions guide users through the payment process

## How It Works

1. User selects tickets and clicks "Buy Tickets"
2. Payment modal opens with instructions and total amount
3. User can choose:
   - **PayPal.me**: Click button to open PayPal payment page
   - **Bank Transfer**: Use provided bank details
4. After payment, user emails confirmation to process ticket
5. Organization manually verifies payment and sends ticket

## Benefits for Non-Profits

- ✅ Uses personal PayPal account (compliant)
- ✅ No PayPal business account fees
- ✅ No automatic integration complexity
- ✅ Full control over payment verification
- ✅ Clear payment trail for accounting
- ✅ Works with existing bank account

## Future Enhancements

If you later want to upgrade to a business account, you can:
1. Create PayPal business account
2. Re-implement PayPal SDK integration
3. Enable automatic payment processing
4. Add webhook handling for real-time updates

## Support

For questions about this setup, contact the development team or refer to PayPal's non-profit guidelines.