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
    <div className="min-h-1/2 w-full">
  

      {/* RIGHT: Form */}
      <div className="w-full bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Row 1 */}
          <select
            name="type"
            value={form.type || ""}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          >
            <option disabled value="">
              Select a type
            </option>
            {types.map((type) => (
              <option key={type} value={type} className="capitalize">
                {type}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="name"
            placeholder="Your Name (optional)"
            value={form.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />

          {/* Row 2 */}
          <input
            type="email"
            name="email"
            placeholder="Your Email (optional)"
            value={form.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />

          <input
            type="text"
            name="contact_number"
            placeholder="Contact Number"
            value={form.contact_number}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />

          {/* Row 3 - full width */}
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="md:col-span-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500"
          />

          {/* Row 4 - full width */}
          <button
            className="md:col-span-2 bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 transition font-semibold"
            onClick={() => {
              console.log(form);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;
