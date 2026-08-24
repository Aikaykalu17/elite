import Image from "next/image";
import Link from "next/link";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full  bg-[#061426] flex flex-col">
      <div className="py-8 flex flex-col gap-6 md:flex md:flex-row md:justify-around md:w-[90%] mx-auto [@media(orientation:landscape)_and_(max-height:500px)]:flex [@media(orientation:landscape)_and_(max-height:500px)]:flex-row">
        <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto md:w-full md:m-0">
          <div>
            <Image
              src="/eliteBgTrns.webp"
              alt="Elite Football Club All Stars"
              height={100}
              width={100}
            />
          </div>
          <nav
            aria-label="Social Links"
            className="flex flex-col gap-4 md:text-center md:justify-evenly"
          >
            <h2 className="text-white text-sm font-bold">EXPLORE</h2>
            <div className="flex flex-row gap-6 justify-evenly">
              <ul
                className="flex flex-col gap-4 md:items-center"
                aria-label="Footer Social Links"
              >
                <li>
                  <Link
                    href="/"
                    className="text-white flex items-center text-xs  transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about-us"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coaches"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/programs"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/graduates"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Graduates
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4 md:items-center">
                <li>
                  <Link
                    href="fixtures"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Fixtures
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/form"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Apply for a Trial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white flex items-center text-xs transition-colors duration-300 hover:text-[#F5B800]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="h-auto bg-slate-700 w-px hidden md:block [@media(orientation:landscape)_and_(max-height:500px)]:block"></div>
        <div className="flex flex-col justify-center text-xs w-[90%] mx-auto gap-8 md:flex md:flex-col md:justify-evenly md:w-full md:m-0 lg:flex-row">
          <div className="flex flex-col gap-4 ">
            <h3 className="text-white font-bold">CONTACT US</h3>
            <div className="flex gap-6 items-center text-xs">
              <FaPhoneAlt color="#F5B800" title="Phone call icon" />
              <a
                href="tel:+2348101375140"
                className="text-white transition-colors duration-300 hover:text-[#F5B800]"
              >
                +234 810 137 5140
              </a>
            </div>
            <div className="flex gap-6 items-center text-xs">
              <FaEnvelope color="#F5B800" size={20} title="Email Icon" />
              <a
                href="mailto:ikegod4luv@gmail.com"
                className="text-white transition-colors duration-300 hover:text-[#F5B800]"
              >
                info@elitefc.com
              </a>
            </div>
            <div className="flex gap-6 items-center text-xs">
              <FaMapMarkerAlt
                color="#F5B800"
                size={20}
                title="Location pointer icon"
              />
              <address className=" text-white transition-colors duration-300 hover:text-[#F5B800]">
                Turf Arena, Abuja, Nigeria
              </address>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold">FOLLOW US</h3>
            <nav className="flex flex-row justify-evenly w-full md:gap-8">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Elite FC on Facebook"
              >
                <FaFacebookF size={20} color="#1877F2" title="Facebook Icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Elite FC on Instagram"
              >
                <FaInstagram size={20} title="Instagram Icon" color="#E4405F" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Elite FC on YouTube"
              >
                <FaYoutube size={20} color="#FF0000" title="YouTube icon" />
              </a>
              <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp
                  size={20}
                  color="#25D366"
                  title="WhatsApp icon"
                  aria-hidden="true"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-4 text-center">
        <p className="text-[0.625rem] text-gray-400">
          © {year} Elite Football Club All Stars. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
