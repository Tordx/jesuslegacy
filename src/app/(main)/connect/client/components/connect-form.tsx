/*
 * Jesus Legacy Church Project
 * Copyright (c) 2026 Jesus Legacy Church.
 *
 * This work is created for the ministry and mission of Jesus Legacy Church.
 * Redistribution, modification, or commercial use of any portion of this
 * project without written permission from Jesus Legacy Church leadership
 * is not permitted.
 *
 * All rights reserved.
 */
"use client";

import { ConnectFormData } from "../../index.types";

interface ConnectFormProps {
  setForm(e: ConnectFormData): void;
  form: ConnectFormData;
}

const ConnectForm = ({ form, setForm }: ConnectFormProps) => {
  const types = ["prayer", "volunteer", "general"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col gap-6 justify-center items-center m-2 p-10 w-[90%] max-w-xl">
      {/* Select Type */}
      <select
        name="type"
        value={form.type || ""}
        onChange={handleChange}
        className="w-full p-3 border rounded-md"
      >
        <option disabled value="general">Select a type</option>
        {types.map((type) => {
          if(type === null) return;
          return <option value={type} key={type} label={type} className="capitalize"/>
        })}
      </select>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Your Name (optional)"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded-md"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Your Email (optional)"
        value={form.email}
        onChange={handleChange}
        className="w-full p-3 border rounded-md"
      />

      {/* Contact Number */}
      <input
        type="text"
        name="contact_number"
        placeholder="Contact Number"
        value={form.contact_number}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-md"
      />

      {/* Message */}
      <textarea
        name="message"
        placeholder="Your Message (optional)"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full p-3 border rounded-md"
      />

      {/* Submit */}
      <button
        className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition"
        onClick={() => {
          console.log(form);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ConnectForm;
