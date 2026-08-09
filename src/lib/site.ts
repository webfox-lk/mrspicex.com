export const site = {
  name: "M.R SPICE EXPORT (PVT) LTD",
  shortName: "M.R Spice Export",
  tagline: "Premium Sri Lankan Whole Spices Exported Worldwide",
  // TODO: replace with the company's live contact details
  email: "info@mrspicex.com",
  phone: "+94 78 756 9596",
  whatsapp: "+94787569596",
  address: "1st Floor, 96 Kandy Road Mawathagama, Sri Lanka.",
  hours: "Tuesday to Sunday  8.00 AM – 6.00 PM",
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}