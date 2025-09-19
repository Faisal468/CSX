import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    serviceInterested: "",
    projectDetails: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          serviceInterested: formData.serviceInterested,
          projectDetails: formData.projectDetails
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Reset form
      setFormData({ fullName: "", email: "", company: "", serviceInterested: "", projectDetails: "" });
      setSubmitSuccess(true);

      // Hide success after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "There was an error submitting your message.";
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email Us", details: "cloudspherextech0@gmail.com", description: "Send us an email anytime" },
    { icon: Phone, title: "Call Us", details: "+92 342 6069324", description: "Mon-Fri from 8am to 5pm" },
    { icon: MapPin, title: "Visit Us", details: "Islamabad, Pakistan", description: "You can visit anythime" },
    { icon: Clock, title: "Working Hours", details: "Mon-Fri: 9AM-6PM", description: "We are available during business hours" }
  ];

  const services = [
    "Web Applications",
    "Mobile Applications",
    "AI & Machine Learning",
    "UI/UX Design",
    "Data Analytics",
    "Project Management",
    "AcademiaX",
    "MATLAB Simulations",
    "Ansys Solidworks",
    "Cloud Solutions"
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Send us a Message</h2>

            {submitSuccess ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceInterested" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="serviceInterested"
                      name="serviceInterested"
                      value={formData.serviceInterested}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      <option value="" className="bg-gray-800">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-gray-800">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4">
                    <p className="text-red-400 text-sm">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" /></>}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                      className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;