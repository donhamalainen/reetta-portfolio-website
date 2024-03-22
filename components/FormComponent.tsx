import React, { useState } from "react";
import nodemailer from "nodemailer";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  return (
    <form>
      <div className="relative mb-4">
        <label htmlFor="email" className="block font-bold mb-1">
          Nimi <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="rounded-md px-3 py-2 w-full bg-primary-secondBackground"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-1">
          Sähköposti <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="rounded-md px-3 py-2 w-full bg-primary-secondBackground"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="company" className="block font-bold mb-1">
          Yritys
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="rounded-md px-3 py-2 w-full bg-primary-secondBackground"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-bold mb-1">
          Puhelinnumero
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="rounded-md px-3 py-2 w-full bg-primary-secondBackground"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-bold mb-1">
          Viesti <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="rounded-md px-3 py-2 w-full bg-primary-secondBackground resize-none h-60"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Lähetä
      </button>
    </form>
  );
}
