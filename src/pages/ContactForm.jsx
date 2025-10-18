import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // ✅ Correct import path
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Replace with your Google Script URL or backend endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 mt-10 border border-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="your.email@example.com"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Subject
          </label>
          <input
            {...register("subject")}
            placeholder="What is this about?"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">
            Message
          </label>
          <textarea
            {...register("message")}
            placeholder="Tell us more about your project..."
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg transition-all duration-200 hover:bg-blue-700 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" /> Sending...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle className="mr-2 h-5 w-5" /> Message Sent!
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}