"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

function Page() {
  return (
    <section className="mt-20 w-full">
      <div className=" flex flex-col items-center gap-2 py-4">
        <h1 className="text-white font-bold text-center">CONTACT US</h1>
        <p className="text-white font-bold text-xs">
          We&apos;d love to hear from you.
        </p>
      </div>
      <div className="bg-white w-full rounded-l-sm rounded-r-sm">
        <div className="w-[90%] mx-auto flex flex-col gap-6 py-6">
          <address className="not-italic flex flex-col gap-3 text-xs">
            <p className="flex items-start gap-2">
              <MapPin size={20} className="text-red-600" aria-hidden="true" />
              <span>
                Turf Arena, Sabi Abacha way,
                <br /> Wuse, Abuja, Nigeria.
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={20} className="text-[#061426]" aria-hidden="true" />
              <a href="tel:+2348012345678">+234 810 137 5140</a>
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp
                size={20}
                className="text-[#25D366]"
                aria-hidden="true"
              />
              <a
                href="https://wa.me/2348012345678"
                aria-label="Chat with Elite FC on WhatsApp"
              >
                +234 810 137 5140
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={20} className="text-[#061426]" aria-hidden="true" />
              <a
                href="mailto:info@elitefootballacademy.ng"
                aria-label="Email Elite FC"
              >
                info@elitefootballacademy.ng
              </a>
            </p>
          </address>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9866651299026!2d7.487141474588101!3d9.064978590997839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0badb48c0829%3A0x77ca8411fb8a5c78!2sTurf%20Arena%20Sports%20Center!5e0!3m2!1sen!2sng!4v1786909443466!5m2!1sen!2sng"
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2 className="font-bold text-[#061426]">FOLLOW US</h2>
          <nav aria-label="Social media links" className="flex justify-evenly">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Elite FC on Facebook"
            >
              <FaFacebookF
                size={25}
                color="#1877F2"
                title="Facebook Icon"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Elite FC on Instagram"
            >
              <FaInstagram
                size={25}
                title="Instagram Icon"
                color="#E4405F"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Elite FC on YouTube"
            >
              <FaYoutube
                size={25}
                color="#FF0000"
                title="YouTube icon"
                aria-hidden="true"
              />
            </a>

            <a
              href="https://wa.me/2348201375140"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Elite FC on WhatsApp"
            >
              <FaWhatsapp
                size={25}
                color="#25D366"
                title="WhatsApp icon"
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
export default Page;
