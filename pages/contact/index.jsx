import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";
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

  return (
    <div className="min-h-screen bg-primary/30 px-4">
      <div className="container mx-auto py-20 flex flex-col items-center justify-center">

        {/* heading */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-4"
        >
          Let's <span className="text-accent">connect.</span>
        </motion.h2>

        {/* email - animated + click to copy */}
<motion.p
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="text-white/90 text-center mb-4 text-lg cursor-pointer relative group inline-block"
  onClick={handleCopyEmail}
>
  <RiMailLine className="inline-block mr-2 text-accent text-xl" />
  <span className="font-semibold relative">
    {email}
    {/* underline animation */}
    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
  </span>
</motion.p>


        {/* copied message */}
        {copied && (
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-green-400 text-sm mb-6"
          >
            ✔ Email copied to clipboard!
          </motion.p>
        )}

        {/* form */}
        <motion.form
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-[650px] flex flex-col gap-6 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/10"
          onSubmit={handleSubmit}
          autoComplete="off"
          data-netlify="true"
        >
          {/* name + email inputs */}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input flex-1"
              disabled={isLoading}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="input flex-1"
              disabled={isLoading}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input"
            disabled={isLoading}
            required
          />

          <textarea
            name="message"
            placeholder="Message..."
            className="textarea h-[150px]"
            disabled={isLoading}
            required
          />

          {/* submit button */}
          <button
            type="submit"
            className="btn w-full sm:w-fit rounded-full border border-white/50 px-8 py-3 flex items-center justify-center hover:border-accent group transition-all duration-300 disabled:opacity-50"
            disabled={isLoading}
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              {isLoading ? "Sending..." : "Let's talk"}
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
