import { motion } from "motion/react";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Bachelor of Science in Computer Science
                      </h3>
                      <p className="text-orange-100 text-lg mt-1">
                        Youngstown State University
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-white/90">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Expected: May 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Academic Focus</h4>
                  </div>
                  <p className="text-gray-600">
                    Specializing in Software Engineering, Algorithms, Data Structures, and System Design
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-800">Key Coursework</h4>
                  </div>
                  <p className="text-gray-600">
                    Database Systems, Operating Systems, Computer Networks, Cloud Computing
                  </p>
                </motion.div>
              </div>

              {/* Relevant Coursework */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Data Structures & Algorithms",
                    "Database Management Systems",
                    "Operating Systems",
                    "Computer Networks",
                    "Software Engineering",
                    "Web Development",
                    "Cloud Computing",
                    "Object-Oriented Programming",
                    "Distributed Systems",
                    "Computer Architecture",
                  ].map((course, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-all cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-orange-50/30 rounded-xl"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Activities & Involvement</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Member of Computer Science Student Association</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Participated in university hackathons and coding competitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Active contributor to open-source projects and tech communities</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Decorative bottom border */}
            <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
