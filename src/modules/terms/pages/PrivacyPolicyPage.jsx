import PageViewer from "@/components/common/PageViewer";
import PolicyPage from "../components/PolicyPage";
import { CONTACT } from "@/lib/contact";

function PrivacyPolicyPage() {
  const privacyPolicy = {
    label: "Legal",
    title: "Privacy Policy",
    intro:
      "Welcome to Inscribe IQ. Your privacy is our top priority. This Privacy Policy outlines how we gather, utilize, share, and protect your personal information when you interact with our website, inscribeiq.com. We encourage you to carefully review this policy to understand how we handle your data.",
    lastUpdated: "08-07-2026",
    sections: [
      {
        heading: "1. Collection of Information",
        blocks: [
          "Personal Data: We collect personal information that you voluntarily provide to us when registering on our website, requesting information about our services, engaging in activities on the website, or contacting us directly. This information may include:",
          {
            list: [
              "Name",
              "Contact information (email, phone number)",
              "Address",
              "Professional background (such as company or role details)",
              "Academic information (such as degree, institution, or course details)",
            ],
          },
        ],
      },
      {
        heading: "2. Use of Your Information",
        blocks: [
          "Having accurate information about you allows us to deliver a seamless, efficient, and personalized experience. Specifically, we may use the information collected from you via our website to:",
          {
            list: [
              "Create and manage your account.",
              "Communicate with you regarding your account or inquiries.",
              "Process and manage requests, orders, and transactions related to our services.",
              "Offer tailored recommendations, updates, and information about new products or services.",
              "Perform other necessary business operations to improve our offerings and support your needs.",
            ],
          },
        ],
      },
      {
        heading: "3. Disclosure of Your Information",
        blocks: [
          "We may share the information we have collected about you in certain circumstances. Your information may be disclosed in the following ways:",
          "As Required by Law or to Protect Rights: If we believe that disclosing information about you is necessary to comply with legal obligations, investigate or address potential violations of our policies, or protect the rights, property, or safety of others, we may share your information as allowed or required by applicable laws, regulations, or legal processes.",
        ],
      },
      {
        heading: "4. Tracking Technologies",
        blocks: [
          "Cookies and Tracking Technologies: We may use cookies, tracking pixels, web beacons, and other similar technologies on our website to enhance your experience, personalize content, and analyze site usage. These technologies help us improve our services and tailor the website to better meet your needs.",
        ],
      },
      {
        heading: "5. Third-Party Websites",
        blocks: [
          "Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy practices or the content of these external sites. Please review the privacy policies of any third-party websites you visit.",
        ],
      },
      {
        heading: "6. Security of Your Information",
        blocks: [
          "We implement a combination of administrative, technical, and physical security measures to safeguard your personal information. Although we take reasonable precautions to protect the data you share with us, please note that no security system is completely secure, and no method of data transmission can be entirely free from risk of interception or misuse.",
        ],
      },
      {
        heading: "7. Options Regarding Your Information",
        blocks: [
          "You can review, update, or delete the information in your account, or deactivate your account at any time by:",
          { list: ["Reaching out to us using the contact details provided."] },
        ],
      },
      {
        heading: "8. Contact Us",
        blocks: [
          `If you have any questions or comments regarding this Privacy Policy, please feel free to contact us at ${CONTACT.email} or ${CONTACT.support.display}.`,
        ],
      },
    ],
  };

  return (
    <PageViewer className="bg-gradient-to-b from-muted/50 via-muted/20 to-transparent">
      <PolicyPage {...privacyPolicy} />
    </PageViewer>
  );
}

export default PrivacyPolicyPage;
