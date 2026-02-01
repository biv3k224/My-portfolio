import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#FFF8F0] to-[#FFE8D6] border-t border-orange-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent hover:from-orange-700 hover:to-orange-800 transition-all mb-4"
            >
              Bibek Kumar Tamang
            </button>
            <p className="text-gray-600">
              Full-Stack Software Engineer building scalable, high-performance systems
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Connect With Me</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
              >
                <Github className="h-5 w-5 text-gray-700 group-hover:text-orange-600 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
              >
                <Linkedin className="h-5 w-5 text-gray-700 group-hover:text-orange-600 transition-colors" />
              </a>
              <a
                href="mailto:bivektamang016@gmail.com"
                className="p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all group"
              >
                <Mail className="h-5 w-5 text-gray-700 group-hover:text-orange-600 transition-colors" />
              </a>
            </div>
            <p className="text-gray-600">
              <a
                href="mailto:bivektamang016@gmail.com"
                className="hover:text-orange-600 transition-colors"
              >
                bivektamang016@gmail.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-orange-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center md:text-left">
              © {new Date().getFullYear()} Bibek Kumar Tamang. All rights reserved.
            </p>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
