// src/components/BotonWhatsApp.jsx
import React from "react";
import whatsappIcon from "../Assets/WhatsApp.png"; // ajusta la ruta según tu estructura

const BotonWhatsApp = () => {
  const phoneNumber = "56912345678"; // coloca aquí tu número con código de país (sin +)
  const message = "Hola, quiero más información"; // mensaje inicial opcional

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          transition: "transform 0.2s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  );
};

export default BotonWhatsApp;
