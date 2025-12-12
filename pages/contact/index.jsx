import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState, useEffect } from "react";
import { RiMailLine } from "react-icons/ri";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "msarul7686@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Thank you. I will get back to you ASAP."))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  // Smooth scroll behavior for internal links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === "A" && e.target.hash) {
        const target = document.querySelector(e.target.hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <div
      id="contact"
      className="min-h-screen bg-primary/30 px-4 pt-24 pb-10 flex justify-center items-start sm:items-center"
    >
      <div className="w-full max-w-[700px]">
        {/* Heading */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-3xl sm:text-4xl font-bold text-center mb-3"
        >
          Let's <span className="text-accent">connect.</span>
        </motion.h2>

        {/* Email clickable */}
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-white/90 text-center mb-4 text-lg flex items-center justify-center gap-2 cursor-pointer group hover:text-accent transition-colors duration-300"
          onClick={handleCopyEmail}
        >
          <RiMailLine className="text-accent text-xl" />
          <span className="font-semibold relative inline-block">
            {email}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
          </span>
        </motion.p>

        {/* Copied popup */}
        {copied && (
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-green-400 text-sm text-center mb-4"
          >
            ✔ Email copied to clipboard!
          </motion.p>
        )}

        {/* Form */}
        <motion.form
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10 flex flex-col gap-5 transition-all duration-300 hover:scale-[1.02]"
          onSubmit={handleSubmit}
          autoComplete="off"
          data-netlify="true"
        >
          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-5 w-full">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input flex-1 border border-white/20 focus:border-accent focus:ring-accent focus:ring-1 transition-all duration-300 rounded-lg px-4 py-2 bg-white/10 text-white placeholder:text-white/60"
              disabled={isLoading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="input flex-1 border border-white/20 focus:border-accent focus:ring-accent focus:ring-1 transition-all duration-300 rounded-lg px-4 py-2 bg-white/10 text-white placeholder:text-white/60"
              disabled={isLoading}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input w-full border border-white/20 focus:border-accent focus:ring-accent focus:ring-1 transition-all duration-300 rounded-lg px-4 py-2 bg-white/10 text-white placeholder:text-white/60"
            disabled={isLoading}
            required
          />

          <textarea
            name="message"
            placeholder="Message..."
            className="textarea h-[150px] w-full border border-white/20 focus:border-accent focus:ring-accent focus:ring-1 transition-all duration-300 rounded-lg px-4 py-2 bg-white/10 text-white placeholder:text-white/60 resize-none"
            disabled={isLoading}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full rounded-full border border-white/40 px-8 py-3 flex items-center justify-center overflow-hidden relative group hover:border-accent transition-all duration-300 disabled:opacity-50 bg-white/10 text-white hover:bg-accent/20"
            disabled={isLoading}
          >
            <span className="transition-all duration-500 group-hover:-translate-y-[120%] group-hover:opacity-0">
              {isLoading ? "Sending..." : "Let's talk"}
            </span>

            <BsArrowRight className="absolute text-[22px] opacity-0 -translate-y-[120%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
