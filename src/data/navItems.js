"use client";

import {
  Info,
  UserRound,
  BookOpen,
  GraduationCap,
  CalendarDays,
  Image,
  Newspaper,
  UserPlus,
  Phone,
  HomeIcon,
} from "lucide-react";

const navItems = [
  { id: 1, label: "Home", href: "/", icon: HomeIcon },
  { id: 2, label: "About Us", href: "/about-us", icon: Info },
  { id: 3, label: "Graduates", href: "/graduates", icon: GraduationCap },
  { id: 4, label: "Gallery", href: "/gallery", icon: Image },
  { id: 5, label: "News", href: "/news", icon: Newspaper },
  { id: 6, label: "Fixtures & Results", href: "/fixtures", icon: CalendarDays },
  { id: 7, label: "Leadership", href: "/coaches", icon: UserRound },
  { id: 8, label: "Programs", href: "/programs", icon: BookOpen },
  { id: 9, label: "Apply for a Trial ", href: "/form", icon: UserPlus },
  { id: 10, label: "Contact Us", href: "/contact", icon: Phone },
];

export default navItems;
