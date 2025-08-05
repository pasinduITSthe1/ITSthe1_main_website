// FormSubmit Configuration for ITSthe1 Website
// This configuration sends form data directly to pasindu.itsthe1@gmail.com
// Uses FormSubmit.co service for reliable email delivery

// Simple form submission using FormSubmit (no API key required)
async function sendEmailViaFormSubmit(formData) {
  try {
    // Create a formatted plain text email body
    const emailBody = `
New Contact Form Submission from ITSthe1 Website

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}

Project Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service of Interest: ${formData.service || "Not specified"}
Budget Range: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

Message:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}

Additional Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Newsletter Subscription: ${formData.newsletter === "yes" ? "Yes" : "No"}
Submitted on: ${new Date().toLocaleString()}
Page URL: ${window.location.href}
User Agent: ${navigator.userAgent}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This message was sent from the ITSthe1 website contact form.
        `.trim();

    // Create a form element and submit it directly (avoids CORS issues)
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/pasindu.d.dev@gmail.com";
    form.style.display = "none";

    // Add form fields
    const fields = {
      name: formData.name,
      email: formData.email,
      message: emailBody,
      _subject: `ITSthe1 Contact: ${formData.name} - ${
        formData.service || "General Inquiry"
      }`,
      _captcha: "false",
      _template: "table",
      _next: window.location.href + "#form-submitted",
    };

    Object.keys(fields).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });

    // Submit the form
    document.body.appendChild(form);

    // Create a promise that resolves when we detect the form was submitted
    return new Promise((resolve, reject) => {
      // Set up a timer to check for success
      const submitTimer = setTimeout(() => {
        document.body.removeChild(form);
        resolve({ success: true, message: "Email sent successfully!" });
      }, 1000);

      // Listen for page navigation (indicates form submission)
      const originalOnBeforeUnload = window.onbeforeunload;
      window.onbeforeunload = function () {
        clearTimeout(submitTimer);
        document.body.removeChild(form);
        resolve({ success: true, message: "Email sent successfully!" });
        window.onbeforeunload = originalOnBeforeUnload;
      };

      // Submit the form
      form.submit();
    });
  } catch (error) {
    console.error("FormSubmit error:", error);
    throw error;
  }
}

// Alternative using Fetch API (backup method)
async function sendEmailViaFetchAPI(formData) {
  try {
    const emailBody = `
Contact: ${formData.name} (${formData.email})
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Service: ${formData.service || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}

Message: ${formData.message}

Newsletter: ${formData.newsletter === "yes" ? "Yes" : "No"}
Submitted: ${new Date().toLocaleString()}
Page: ${window.location.href}
        `.trim();

    // Use a simple fetch to FormSubmit
    const response = await fetch(
      "https://formsubmit.co/ajax/pasindu.d.dev@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: emailBody,
          _subject: `ITSthe1 Contact: ${formData.name}`,
          _captcha: "false",
        }),
      }
    );

    if (response.ok) {
      const result = await response.json();
      return { success: true, message: "Email sent successfully!" };
    } else {
      throw new Error("Failed to send email via fetch");
    }
  } catch (error) {
    console.error("Fetch API error:", error);
    throw error;
  }
}

// EmailJS Configuration (optional - for advanced setup)
const EMAILJS_CONFIG = {
  serviceID: "YOUR_SERVICE_ID",
  templateID: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
};

// Initialize EmailJS if available
if (typeof emailjs !== "undefined") {
  emailjs.init(EMAILJS_CONFIG.publicKey);
}

// Function to send email via EmailJS (requires setup)
async function sendEmailViaEmailJS(formData) {
  if (typeof emailjs === "undefined") {
    throw new Error("EmailJS not loaded");
  }

  try {
    // Prepare template parameters
    const templateParams = {
      to_email: "pasindu.itsthe1@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Not provided",
      company: formData.company || "Not provided",
      service: formData.service || "Not specified",
      budget: formData.budget || "Not specified",
      timeline: formData.timeline || "Not specified",
      message: formData.message,
      newsletter: formData.newsletter === "yes" ? "Yes" : "No",
      timestamp: new Date().toLocaleString(),
      page_url: window.location.href,
    };

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    console.log("EmailJS sent successfully:", response);
    return { success: true, response };
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
}
