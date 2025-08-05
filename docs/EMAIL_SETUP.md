` Email Contact Form Setup

## Overview

The contact form has been updated to send emails directly to `pasindu.itsthe1@gmail.com` using FormSubmit service, eliminating the need for Netlify Forms and preventing redirects to success pages.

## How It Works

### 1. Form Submission

- When users click "Send Message", the form data is processed by JavaScript
- No page redirect occurs - users stay on the same page
- A success/error notification appears instead

### 2. Email Service

The system uses **FormSubmit.co** (free service) as the primary email delivery method:

- No API keys required
- No external account setup needed
- Emails are sent directly to `pasindu.itsthe1@gmail.com`
- Professional email formatting with all form details

### 3. Email Format

Emails received will contain:

```
New Contact Form Submission from ITSthe1 Website

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: [User's Name]
Email: [User's Email]
Phone: [Phone Number or 'Not provided']
Company: [Company Name or 'Not provided']

Project Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service of Interest: [Selected Service]
Budget Range: [Selected Budget]
Timeline: [Selected Timeline]

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[User's Message]

Additional Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Newsletter Subscription: Yes/No
Submitted on: [Date and Time]
Page URL: [URL where form was submitted]
User Agent: [Browser information]
```

## Files Modified

### 1. `/static/js/formsubmit.js` (Created)

- Contains email sending functions
- FormSubmit.co integration
- EmailJS support (optional, for advanced setup)

### 2. `/static/js/main.js` (Updated)

- Removed Netlify Forms integration
- Updated form submission handling
- Added proper error handling

### 3. `/themes/itsthe1/layouts/shortcodes/contact-form.html` (Updated)

- Removed Netlify attributes (`data-netlify`, `action` redirect)
- Cleaned up form structure

### 4. `/themes/itsthe1/layouts/_default/baseof.html` (Updated)

- Added EmailJS script (for future use)
- Added emailjs-config.js script

### 5. `/static/test-form.html` (Created)

- Test page to verify email functionality
- Visit `/test-form.html` to test the system

## Testing

1. **Test Form**: Visit `yoursite.com/test-form.html` to test email delivery
2. **Production Form**: Use the regular contact page at `yoursite.com/contact/`

## Spam Protection

- Honeypot field to prevent bot submissions
- Form validation on both client and server side
- Rate limiting through FormSubmit service

## Backup Email Methods

### Option 1: EmailJS (Advanced)

If you want more control and customization:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service and template
3. Update the configuration in `emailjs-config.js`

### Option 2: Formspree

Alternative service similar to FormSubmit:

1. Sign up at [Formspree.io](https://formspree.io/)
2. Get form endpoint
3. Update the fetch URL in the code

## Troubleshooting

### If emails are not received:

1. Check spam/junk folder
2. Verify the email address in `emailjs-config.js`
3. Test using the test form at `/test-form.html`
4. Check browser console for JavaScript errors

### If form doesn't submit:

1. Check browser console for errors
2. Ensure all required fields are filled
3. Verify internet connection
4. Try disabling browser extensions

## Email Address Configuration

To change the recipient email address, update this line in `/static/js/formsubmit.js`:

```javascript
const response = await fetch('https://formsubmit.co/YOUR_NEW_EMAIL@domain.com', {
```

## Security Notes

- FormSubmit.co is a reputable service used by many websites
- No sensitive data is stored on external servers
- Form submissions are encrypted in transit (HTTPS)
- Honeypot protection prevents most spam

## Maintenance

- No regular maintenance required
- FormSubmit is a free service with good uptime
- Monitor email delivery occasionally
- Keep backup email methods configured
