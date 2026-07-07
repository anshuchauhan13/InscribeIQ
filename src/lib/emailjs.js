import emailjs from "@emailjs/browser";

// EmailJS configuration — values live in .env.local (see .env.example).
// Vite exposes only variables prefixed with VITE_.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const ADMIN_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN;
const THANKYOU_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_THANKYOU;
const ADMIN_EMAIL = import.meta.env.VITE_EMAILJS_ADMIN_EMAIL;

// Normalise any field value into a template-safe string.
const toStr = (v) => {
  if (v == null || v === "") return "";
  if (Array.isArray(v)) return v.join(", ");
  if (v instanceof Date) return v.toLocaleDateString("en-IN");
  return String(v);
};

// Readable multi-line dump of every filled field — feeds the {{details}} variable.
const formatDetails = (data) =>
  Object.entries(data)
    .map(([k, v]) => [k, toStr(v)])
    .filter(([, v]) => v !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

/**
 * Sends two emails for a single form submission:
 *   1. an admin notification (to your inbox) with the full details, and
 *   2. a thank-you confirmation (to the person who submitted).
 *
 * The admin email must succeed; the thank-you is best-effort so a delivery
 * hiccup never blocks the user's success feedback.
 *
 * @param {string} formType         Human label, e.g. "Consultation Booking".
 * @param {object} data             The form state object (any field set).
 * @param {string} [thankYouMessage] Tailored line shown in the user's email.
 */
export async function sendLead(formType, data, thankYouMessage) {
  const fields = Object.fromEntries(
    Object.entries(data).map(([k, v]) => [k, toStr(v)])
  );

  const params = {
    ...fields, // every field as its own {{variable}}
    to_email: ADMIN_EMAIL, // recipient of the admin notification ({{to_email}})
    form_type: formType,
    submitted_at: new Date().toLocaleString("en-IN"),
    name: fields.name || `${fields.firstName ?? ""} ${fields.lastName ?? ""}`.trim(),
    email: fields.email || "",
    phone: fields.phone || "",
    reply_to: fields.email || "",
    details: formatDetails(data),
    thankyou_message:
      thankYouMessage ||
      `Thank you for connecting with Inscribe IQ regarding ${formType}. Our team will get back to you shortly.`,
  };

  // 1) Notify the team — this is the one that must land.
  await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE, params, { publicKey: PUBLIC_KEY });

  // 2) Thank-you to the user — best-effort, never blocks the UX.
  try {
    await emailjs.send(SERVICE_ID, THANKYOU_TEMPLATE, params, { publicKey: PUBLIC_KEY });
  } catch (err) {
    console.error("Thank-you email failed to send:", err);
  }
}
