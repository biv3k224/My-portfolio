import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8F0] via-[#FFF5E9] to-[#FFE8D6] px-6">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center">
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 mb-6 bg-orange-100/50 text-orange-700 rounded-full backdrop-blur-sm border border-orange-200/50">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent"
          >
            Bibek Kumar Tamang
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-8"
          >
            Full-Stack Software Engineer
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Building scalable, high-performance systems with{" "}
            <span className="text-orange-600 font-semibold">Java</span>,{" "}
            <span className="text-orange-600 font-semibold">Spring Boot</span>,{" "}
            <span className="text-orange-600 font-semibold">React</span>, and modern cloud technologies
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-orange-300 text-gray-700 hover:bg-orange-50 px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://github.com/biv3k224"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/btamang/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
            </a>
            <a
              href="mailto:bivektamang016@gmail.com"
              className="p-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-orange-500 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
