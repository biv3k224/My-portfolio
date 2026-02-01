import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Software Developer Intern",
      company: "Dallo Tech",
      location: "Remote",
      period: "Jun 2024 - Aug 2024",
      achievements: [
        "Improved API response time by 35% through database query optimization and Redis caching implementation",
        "Developed microservices handling 5,000+ concurrent requests with Spring Boot and Docker",
        "Built CI/CD pipelines using GitHub Actions, reducing deployment time by 50%",
        "Implemented JWT-based authentication system increasing application security",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
      technologies: ["Java", "Spring Boot", "Docker", "Redis", "PostgreSQL", "AWS", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-orange-500 to-orange-600 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-12 md:mb-0"
            >
              <div className="md:flex md:items-center md:justify-between">
                {/* Content Card */}
                <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : 'md:ml-auto'}`}>
                  <div className="bg-gradient-to-br from-[#FFF8F0] to-white p-8 rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 group">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:ml-auto' : ''}`}>
                          <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform">
                            <Briefcase className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-xl text-orange-600 font-semibold mb-3">{exp.company}</p>
                      
                      <div className={`flex flex-wrap gap-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className={`flex items-center gap-2 text-lg font-semibold text-gray-800 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <TrendingUp className="h-5 w-5 text-orange-500" />
                        Key Achievements
                      </h4>
                      <ul className={`space-y-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <span className={`flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                            <span className="flex-1">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-white border border-orange-200 text-gray-700 rounded-lg text-sm hover:bg-orange-50 hover:border-orange-400 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full border-4 border-white shadow-lg z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-200 text-center"
        >
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-orange-600">Open to new opportunities!</span>{" "}
            I'm actively seeking full-time Software Engineering roles where I can contribute 
            to building scalable, high-impact systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
