// Single source of truth for contact details, navigation and social links.
// Update a value here and it changes everywhere (footer, contact page, menu).

export const site = {
  name: "Elite Football Club All Stars",
  shortName: "Elite FC",
  url: "https://elite-five-rouge.vercel.app",
  description:
    "Elite Football Club All Stars is a football academy in Abuja, Nigeria, discovering, developing and nurturing young talents into world-class footballers.",
  phone: {
    display: "+234 810 137 5140",
    tel: "+2348101375140",
    whatsapp: "2348101375140",
  },
  email: "info@elitefootballacademy.ng",
  address: {
    venue: "Turf Arena",
    street: "Sani Abacha Way",
    area: "Wuse, Abuja",
    country: "Nigeria",
  },
};

export const socials = [
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com" },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com" },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/${site.phone.whatsapp}`,
  },
];

// Order here is the order shown in the header pill and the footer.
export const navLinks = [
  { href: "/about-us", label: "About us" },
  { href: "/programs", label: "Programs" },
  { href: "/coaches", label: "Our team" },
  { href: "/graduates", label: "Graduates" },
  { href: "/fixtures", label: "Fixtures" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const applyLink = { href: "/form", label: "Apply for a trial" };
