import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const scriptURL = "https://script.google.com/macros/s/AKfycbzjD2FWL5MH2SRaChjG4grWroUF_3HiFvXxjCvNbepoEOZzEE3-5uCLAD61OdA_2KTsHg/exec";

      const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        } 
      } catch (error) {
        console.error("Error!", error.message);
      } finally {
        setLoading(false);
      }
    };


  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-100 text-gray-800 overflow-x-hidden w-full">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 text-center px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Have a question or a project in mind? Let’s connect and make it happen.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 w-full overflow-hidden">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white p-8 rounded-2xl shadow-lg w-full"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Send Us a Message</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                Message Sent Successfully ✅
              </h3>
              <p>We’ll get back to you shortly.</p>
            </div>
          )}
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center w-full"
        >
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Our Office</h2>

          <p className="text-gray-700 mb-4">
            <strong>Address:</strong> Ujjain , Madhya-Pradesh India - 456006
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email:</strong> Hussainiitservices@gmail.com
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Phone:</strong> +91-7024951915, +91-9156770832
          </p>

          <div className="mt-6 overflow-hidden rounded-lg shadow-md">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Surat,Gujarat,India&output=embed"
              className="w-full h-[300px] border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
