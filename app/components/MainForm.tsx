"use client";
import React, { useEffect, useState } from "react";

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

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const { name, email, phone, service } = formData;
    setButtonDisabled(
      !name.trim() || !email.trim() || !phone.trim() || !service.trim()
    );
  }, [formData]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handled async
    fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    // Reset form data
    setFormData({ name: "", email: "", phone: "", service: "" });
    alert("Form submitted successfully!");
  };

  return (
    <form className="flex flex-col gap-3 px-2 py-3" onSubmit={onSubmit}>
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
        className={`${buttonDisabled ? "bg-zinc-400 hover:cursor-not-allowed" : "bg-[#f86f5e] hover:cursor-pointer"} text-black font-semibold font-roboto mt-3 h-12 rounded-md`}
        type="submit"
        disabled={buttonDisabled}
      >
        SUBMIT
      </button>
    </form>
  );
}
