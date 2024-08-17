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

    // Add the access key to the form data
    const formDataWithAccessKey = {
      ...formData,
      access_key: "cae00c91-28b6-4c5b-bd6b-fc7f02b82457",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataWithAccessKey),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("Message sent successfully!\nありがとうございます。");
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
          <h1 className="pt-14 text-4xl font-thin text-white bg-transparent w-full text-center md:text-5xl">
            Japans cursus Amsterdam
          </h1>
        </div>
        <div className="w-full text-center">
          <h2 className="pt-12 text-2xl font-semibold text-white bg-transparent md:text-3xl">
            Contact us
          </h2>
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
              className="p-2 text-base border-b-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="p-2 text-base border-b-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg text-white"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="p-2 text-base border-b-2 border-stone-800 outline-none bg-transparent backdrop-blur-lg text-white"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Message"
              className="p-2 text-lg border-2 border-stone-800 outline-none h-28 bg-transparent backdrop-blur-lg text-white"
            />
            <button
              type="submit"
              className="p-4 text-lg border-2 w-1/2 border-stone-400 text-white transition duration-500 ease-in-out transform hover:scale-100 hover:text-xl"
            >
              Send
            </button>
            <p className="font-mono text-lg text-green-500 md:text-3xl  whitespace-pre-wrap">
              {status}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
