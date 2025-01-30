import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FourthSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xovjdozo", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    });

    if (response.ok) {
      setSubmissionStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmissionStatus("❌ Failed to send message. Please try again.");
    }
  }

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Track scroll position for global visibility of the button
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 3400) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="bg-slate-50 min-h-[82vh] flex-center flex-col">
      <div className="flex-between w-full my-10">
        <div className="ml-[20rem] flex flex-col items-center space-y-4">
          {/* Profile Image */}
          <div className="w-[15rem] h-[20rem] rounded-lg border-2 border-gray-300 p-4 overflow-hidden bg-white hover:border-gray-600 duration-500">
            <Image
              src="/profile2.jpg"
              width={250}
              height={350}
              alt="Your Name"
              className="w-full h-full object-cover rounded-sm hover:rounded-lg rotate-180 hover:scale-[1.05] duration-500 opacity-95 hover:opacity-100"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <Link href="https://x.com/armaan23____" className="bg-gray-200 rounded-full p-3 flex-center hover:bg-black hover:scale-125 hover:text-white text-gray-800 duration-500">
              <span className=" text-xl"><FaXTwitter /></span>
            </Link>
            <Link href="https://www.linkedin.com/in/armaan-raj-thakur-123414293/" className="bg-gray-200 rounded-full p-3 flex-center hover:bg-black hover:scale-125 hover:text-white text-gray-800 duration-500">
              <span className=" text-xl"><FaLinkedin /></span>
            </Link>
            <Link href="https://github.com/Armaan48985" className="bg-gray-200 rounded-full p-3 flex-center hover:bg-black hover:scale-125 hover:text-white text-gray-800 duration-500">
              <span className=" text-xl"><FaGithub /></span>
            </Link>
          </div>
        </div>

        <div>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-[25rem] max-w-2xl p-8 bg-white rounded-xl space-y-6 mb-10 mr-[10rem]">
            <h2 className="text-4xl text-black mb-10">Contact Me.</h2>
            <div className="space-y-6">
              {["name", "email", "message"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-gray-600 text-sm font-medium">
                    {field === "message" ? "Your Message" : `Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  </label>
                  <div className="relative group">
                    {field === "message" ? (
                      <textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full text-black pt-2 pb-1 border-b-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-black transition duration-200"
                        rows={4}
                        required
                      ></textarea>
                    ) : (
                      <input
                        type={field === "email" ? "email" : "text"}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full text-black pt-2 pb-1 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-black transition duration-200"
                        required
                      />
                    )}
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black transform scale-x-0 origin-left transition-transform duration-200 group-focus-within:scale-x-100"></span>
                  </div>
                </div>
              ))}
              {submissionStatus && <p className="text-sm text-center">{submissionStatus}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Animated Text */}
      <div className="text-wrapper text-3xl text-black py-4 opacity-60 uppercase">
        {Array(8).fill("Thank you for visiting ✦").map((text, i) => (
          <span key={i} className="animated-text mr-2 tracking-wide">{text}</span>
        ))}
      </div>

       {/* Conditionally Render Scroll to Top Button */}
       {showScrollToTop && (
         <button 
         onClick={scrollToTop}
         className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out">
         <FaArrowUp className="text-xl" />
       </button>
      )}
    </div>
  );
};

export default FourthSection;
