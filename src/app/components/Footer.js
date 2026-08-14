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
  return (
    <footer className="w-full bg-[#061426] py-8 flex flex-col gap-6">
      <div className="flex flex-row gap-4 w-[90%] mx-auto">
        <div>
          <Image
            src="/eliteBgTrns.webp"
            alt="Elite Football Club All Stars"
            height={100}
            width={100}
          />
        </div>
        <nav aria-label="Social Links" className="flex flex-col gap-4">
          <h2 className="text-white">QUICK LINKS</h2>
          <div className="flex flex-row gap-6">
            <ul
              className="flex flex-col gap-4"
              aria-label="Footer Social Links"
            >
              <li>
                <Link href="/" className="text-white flex items-center">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about-us" className="text-white flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-white flex items-center">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-white flex items-center">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/graduates"
                  className="text-white flex items-center"
                >
                  Graduates
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="fixtures" className="text-white flex items-center">
                  Fixtures
                </Link>
              </li>
              <li>
                <Link href="" className="text-white flex items-center">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="" className="text-white flex items-center">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="flex flex-col justify-center w-[90%] mx-auto gap-6">
        <div className="flex flex-col gap-6 w-full">
          <h3 className="text-white">CONTACT US</h3>
          <div className="flex gap-6 items-center">
            <FaPhoneAlt color="#F5B800" title="Phone call icon" />
            <a href="tel:+2348101375140" className="text-white">
              +234 810 137 5140
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <FaEnvelope color="#F5B800" size={30} title="Email Icon" />
            <a href="mailto:ikegod4luv@gmail.com" className="text-white">
              info@elitefc.com
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <FaMapMarkerAlt
              color="#F5B800"
              size={30}
              title="Location pointer icon"
            />
            <address className=" text-white">
              Legacy Pitch, Abuja, Nigeria
            </address>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-white">FOLLOW US</h3>
          <nav className="flex flex-row justify-evenly w-full">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={40} color="#1877F2" title="Facebook Icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={40} title="Instagram Icon" color="#E4405F" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={40} color="#FF0000" title="YouTube icon" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={40} color="#25D366" title="WhatsApp icon" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
