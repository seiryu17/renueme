import { Mail, Phone, MapPin } from "lucide-react";
import shape from "../assets/shape.png";
import renuelogo from "../assets/renue_logo_white.svg";
import fb from "../assets/fb-logo.svg";
import ig from "../assets/ig-logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-10 relative">
        <div className="w-full absolute top-0 bg-[#FFD500]">
          <img className="w-full" src={shape} />
        </div>

        <div className="w-full px-6 md:px-12 mt-6">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 pt-8">
            <div className="md:w-1/4 text-center md:text-left">
              <h2 className="text-2xl font-bold flex justify-center md:justify-start">
                <img src={renuelogo} alt="Renue Logo" className="h-10" />
              </h2>
              <p className="text-sm mt-4">
                Re:Nue, a social enterprise under The Salvation Army, is
                passionate about sustainability and community impact since 1996.
                By re-purposing and reselling your generous donations, we
                generate funds to support vital programs for the community,
                including children, youth, the elderly, migrant workers, and
                ex-offenders.
              </p>
              <div className="justify-center md:justify-start gap-4 hidden md:flex md:mt-4">
                <img src={fb} alt="Facebook" />
                <img src={ig} alt="Instagram" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-10 text-center md:text-left">
              <div>
                <h3 className="text-lg font-semibold hidden md:block">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      The Salvation Army
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold hidden md:block">
                  Join us
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="hover:underline">
                      Volunteer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Corporate partnerships
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Join as staff
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="md:text-lg md:font-semibold mt-4 md:mt-0">
                  Contact
                </h3>
                <ul className="md:mt-4 space-y-3 hidden md:block">
                  <li className="flex flex-col items-center md:flex-row md:items-center gap-2">
                    <Mail size={18} />
                    <a
                      href="mailto:customercare@smm.salvationarmy.org"
                      className="hover:underline"
                    >
                      customercare@smm.salvationarmy.org
                    </a>
                  </li>
                  <li className="flex flex-col items-center md:flex-row md:items-center gap-2">
                    <Phone size={18} />
                    <a href="tel:+6562885438" className="hover:underline">
                      +65 6288 5438
                    </a>
                  </li>
                  <li className="flex flex-col items-center md:flex-row md:items-start gap-2">
                    <MapPin size={18} />
                    <span className="text-center md:text-left">
                      356 Tanglin Road, Singapore 247674
                      <br />
                      Operation Hours: 8:30 am - 5:30 pm (Mon-Sat)
                    </span>
                  </li>
                </ul>
              </div>

              <div className=" justify-center md:justify-start gap-4 flex mt-4 mb-6 md:hidden">
                <img src={fb} alt="Facebook" />
                <img src={ig} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-[#3D3D3D] p-4 px-6 md:px-12 flex flex-col md:flex-row justify-between text-sm text-white text-center md:text-left gap-4">
        <p className="space-x-10">
          <span>Privacy policy</span> <span>|</span>{" "}
          <span>Terms & conditions</span>
        </p>
        <p>© 2025 Re:Nue. All rights reserved</p>
      </div>
    </>
  );
}
