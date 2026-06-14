import React, { useState } from "react";

import WhatsappSelector from "./WhatsappSelector";

const WhatsappButton = ({
  children = "Hablar con un asesor",
  className = "",
}) => {
  const [isOpen, setIsOpen] =
    useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children}
      </button>

      <WhatsappSelector
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default WhatsappButton;