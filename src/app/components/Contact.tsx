import { motion } from "motion/react";
import { Mail, Linkedin, Github, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (this is a demo, so we'll just log it)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bivektamang016@gmail.com",
      link: "mailto:bivektamang016@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/bibektamang",
      link: "linkedin.com/in/bibektamang",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/bibektamang",
      link: "github.com/bibektamang",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "United States",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a question, want to collaborate on a project, or just want to say hi,
                I'd love to hear from you. Feel free to reach out through any of the channels below
                or use the contact form.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg group-hover:scale-110 transition-transform">
                        <info.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">{info.label}</p>
                        <p className="text-gray-600 group-hover:text-orange-600 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-orange-100">
                      <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg">
                        <info.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-1">{info.label}</p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200"
            >
              <p className="text-gray-700 mb-4 font-medium">Find me on social media:</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/biv3k224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <Github className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/btamang/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
                </a>
                <a
                  href="bivektamang016@gmail.com"
                  className="p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
                >
                  <Mail className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-orange-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    required
                    className="w-full border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="w-full border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={6}
                    className="w-full border-orange-200 focus:border-orange-400 focus:ring-orange-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
