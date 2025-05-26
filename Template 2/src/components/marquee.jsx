import React from 'react';
import { motion } from 'framer-motion';
import "./marquee.css";
import { IoMdArrowForward } from "react-icons/io";
const Marquee = () => {
  const groupImages = [
    { src: "/groups/bop.webp", alt: "Bop" },
    { src: "/groups/Connells_Group_logo.jpg", alt: "Connells Group Logo" },
    { src: "/groups/Danube-Properties-banner.jpg", alt: "Danube Properties Banner" },
    { src: "/groups/dlf.svg", alt: "DLF" },
    { src: "/groups/emaar.svg", alt: "Emaar" },
    { src: "/groups/exp-reality2081.jpg", alt: "Exp Reality 2081" },
    { src: "/groups/gaur group.png", alt: "Gaur Group" },
    { src: "/groups/Keller_Williams_Realty_logo.svg.png", alt: "Keller Williams Realty Logo" },
    { src: "/groups/Land Securities Group.png", alt: "Land Securities Group" },
    { src: "/groups/Redfin_logo.png", alt: "Redfin Logo" },
    { src: "/groups/Segro.png", alt: "Segro" },
    { src: "/groups/sobha realty.jpg", alt: "Sobha Realty" }
  ];

  return (
    <motion.section
      className="logos"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Our Clientele</h2>
      <motion.div
        className="marquee-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="marquee-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {groupImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className="marquee-image" />
          ))}
          {groupImages.map((image, index) => (
            <img key={index + groupImages.length} src={image.src} alt={image.alt} className="marquee-image" />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
export default Marquee