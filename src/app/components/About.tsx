import { motion } from "motion/react";
import { Code2, Database, Cloud, Zap } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Scalable Systems",
      description: "Expert in designing and building high-performance, scalable backend architectures",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Proficient in optimizing database performance and distributed data systems",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Experienced in deploying and managing applications on cloud infrastructure",
    },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Committed to delivering fast, efficient, and optimized solutions",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-[#FFF8F0]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1754548930550-be9fa88874f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMHdvcmtzcGFjZSUyMGRlc2t8ZW58MXx8fHwxNzY5OTE2ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-200/30 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate Full-Stack Software Engineer specializing in building{" "}
              <span className="text-orange-600 font-semibold">scalable, high-performance systems</span>.
              With expertise in backend engineering, distributed systems, and cloud deployment, 
              I transform complex problems into elegant, efficient solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My approach combines strong fundamentals in{" "}
              <span className="text-orange-600 font-semibold">system design</span> with 
              modern development practices, ensuring that every project I work on is built 
              for performance, scalability, and maintainability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently pursuing my Bachelor of Science in Computer Science at{" "}
              <span className="text-orange-600 font-semibold">Youngstown State University</span>, 
              I'm constantly learning and applying cutting-edge technologies to real-world challenges.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
