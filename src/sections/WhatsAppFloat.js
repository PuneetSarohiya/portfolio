import React from "react";
import { profile } from "../data";

const whatsappNumber = profile.phone.replace(/\D/g, "");

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}