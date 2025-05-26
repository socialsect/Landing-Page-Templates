import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { LiaLinkedin } from "react-icons/lia";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AiOutlineYoutube } from "react-icons/ai";
export default function SocialLinks() {
  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', url: "https://www.instagram.com/thebessongroup" },
    { icon: TiSocialFacebookCircular, label: 'Facebook', url: "https://www.facebook.com/p/The-Besson-Group-I-Real-Estate-61570294342433" },
    { icon: AiOutlineYoutube, label: 'Youtube', url: "https://www.youtube.com/@thebessongroup" }
  ];

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-light mb-10 text-luxury-black">Connect With Us</h2>
        
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.label}
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100 group-hover:bg-luxury-red group-hover:border-luxury-red transition-colors duration-300">
                <social.icon size={24} className="text-luxury-black group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="block mt-2 text-sm text-gray-600 group-hover:text-luxury-red transition-colors duration-300">
                {social.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
