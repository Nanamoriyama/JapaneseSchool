"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    level: "beginner",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/images/red.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 font-raleway flex flex-col items-center">
          <div className="pt-14 text-4xl font-thin text-white bg-transparent w-full text-center md:text-5xl">
            Contact Us
          </div>
          <div className="relative z-10 font-raleway flex justify-center pr-2 pl-2 w-full">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 max-w-lg w-full p-8 bg-opacity-50 backdrop-blur-md mt-8"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="p-2 text-base border-b-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="YourEmail"
                className="p-2 text-base border-b-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="p-2 text-base border-b-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg"
              />
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="p-2 text-lg border-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg text-stone-300 hover:cursor-pointer"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="private">Private</option>
              </select>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Message"
                className="p-2 text-lg border-2 border-stone-800 outline-none h-28 bg-transparent backdrop-blur-lg"
              />
              <button
                type="submit"
                className="p-4 text-lg border-2 w-1/2 border-stone-400 text-stone-300 transition duration-500 ease-in-out transform hover:scale-100 hover:text-xl"
              >
                Send
              </button>
              <p>{status}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
