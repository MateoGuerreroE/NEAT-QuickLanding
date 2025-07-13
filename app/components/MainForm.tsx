"use client";
import React, { useState } from "react";

export interface IFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

export default function MainForm() {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form data
    setFormData({ name: "", email: "", phone: "", service: "" });
    alert("Form submitted successfully!");
  };

  return (
    <form className="flex flex-col gap-3 px-2" onSubmit={onSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="bg-zinc-200 rounded-sm h-10 text-[16px] text-black px-2 focus:outline-none focus:ring-0"
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="bg-zinc-200 rounded-sm h-10 text-[16px] text-black px-2 focus:outline-none focus:ring-0"
        placeholder="Email"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="bg-zinc-200 rounded-sm h-10 text-[16px] text-black px-2 focus:outline-none focus:ring-0"
        placeholder="Phone"
      />
      <input
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="bg-zinc-200 rounded-sm h-10 text-[16px] text-black px-2 focus:outline-none focus:ring-0"
        placeholder="Service"
      />
      <button
        className="bg-[#f86f5e] text-black font-semibold font-roboto mt-3 h-12 rounded-md hover:cursor-pointer"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}
