// ─────────────────────────────────────────────────────────────────────────────
// Central contact details for Inscribe IQ.
// This is the single source of truth — update here to change numbers, email,
// address, and social links across the entire site.
//
//   • WhatsApp / enquiries  → enquiry number
//   • Voice calls / support → support number
// ─────────────────────────────────────────────────────────────────────────────

export const CONTACT = {
  address: "Rajendra Nagar, Ghaziabad, India. 201007.",
  mapUrl:
    "https://maps.app.goo.gl/utk1gUwvnS7SMk2e7",
  email: "info@inscribeiq.in",

  // Enquiries — used for WhatsApp
  enquiry: {
    display: "+91 92208 53475",
    tel: "+919220853475",
    wa: "919220853475", // wa.me format (country code + number, no symbols)
  },

  // Support — used for voice calls
  support: {
    display: "+91 92170 02328",
    tel: "+919217002328",
  },

  socials: {
    instagram: "https://www.instagram.com/inscribe.iq?igsh=cDQxbGZvN2Z4bTNi",
    linkedin: "https://www.linkedin.com/company/inscribeiq/",
    facebook: "https://facebook.com/inscribeiq",
  },
};

// Default prefilled message for WhatsApp deep-links.
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi Inscribe IQ, I'd like to know more about your services.";

// Build a wa.me deep-link with an optional prefilled message.
export const waLink = (message = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${CONTACT.enquiry.wa}?text=${encodeURIComponent(message)}`;
