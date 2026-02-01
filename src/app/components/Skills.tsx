import { motion } from "motion/react";
import {
  Code,
  Boxes,
  Database,
  Cloud,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "C/C++", "JavaScript", "SQL"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Frameworks & Tools",
      icon: Boxes,
      skills: ["Spring Boot", "React", "Apache Kafka", "JWT", "REST APIs", "Maven"],
      gradient: "from-orange-400 to-amber-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      skills: ["Docker", "AWS EC2", "AWS S3", "Git", "CI/CD", "Postman", "GitHub"],
      gradient: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white border border-orange-200 text-gray-700 rounded-full hover:bg-orange-50 hover:border-orange-400 hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200"
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Core Competencies
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "System Design",
              "Microservices Architecture",
              "Distributed Systems",
              "Performance Optimization",
              "RESTful APIs",
              "Message Queues",
              "Caching Strategies",
              "Agile Development",
            ].map((competency, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 bg-white border-2 border-orange-300 text-gray-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
