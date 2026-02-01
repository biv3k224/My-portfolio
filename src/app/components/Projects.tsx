import { motion } from "motion/react";
import { ExternalLink, Github, Zap, Users, ShoppingCart, Cpu } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function Projects() {
  const projects = [
    {
      title: "High-Throughput Ticket Reservation System",
      description:
        "Built a high-concurrency ticket booking platform handling 10,000+ concurrent users with zero data inconsistency. Implemented distributed locking and Redis caching for sub-200ms response times.",
      icon: Zap,
      tags: ["Java", "Spring Boot", "Redis", "PostgreSQL", "JWT", "AWS"],
      metrics: ["10K+ concurrent users", "200ms response time", "99.9% uptime"],
      gradient: "from-orange-500 to-red-500",
      liveUrl: "https://github.com/biv3k224/High-Throughput-Ticket-Reservation-System",
      githubUrl: "https://github.com/biv3k224/High-Throughput-Ticket-Reservation-System",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Developed a scalable WebSocket-based chat system with Kafka-backed messaging. Supports group chats, typing indicators, and message persistence.",
      icon: Users,
      tags: ["React", "WebSocket", "Kafka", "MongoDB", "Docker"],
      metrics: ["Real-time messaging", "1000+ active users", "Kafka integration"],
      gradient: "from-orange-400 to-amber-500",
      liveUrl: "https://github.com/biv3k224/chatApp",
      githubUrl: "https://github.com/biv3k224/chatApp",
    },
    {
      title: "Big Data Pipeline",
      description:
        "Designed and implemented a scalable Java-based big data pipeline for ingesting, processing, and analyzing large datasets. Built fault-tolerant data flows with batch and stream processing, enabling reliable transformations and efficient downstream analytics.",
      icon: Cpu,
      tags: ["Java", "Apache Kafka", "Apache Spark", "Spring Boot", "PostgreSQL"],
      metrics: [
        "High-throughput data ingestion",
        "Fault-tolerant processing",
        "Scalable pipeline architecture"
      ],
      gradient: "from-amber-500 to-yellow-500",
      liveUrl: "https://github.com/biv3k224/java-bigdata-pipeline",
      githubUrl: "https://github.com/biv3k224/java-bigdata-pipeline",
    },
    {
      title: "Maze Solver System",
      description:
        "Created a maze-solving visualizer using BFS and DFS algorithms with real-time pathfinding and performance comparisons.",
      icon: Cpu,
      tags: ["Python", "React", "Algorithms", "Data Structures"],
      metrics: ["BFS / DFS", "Real-time visualization", "Performance metrics"],
      gradient: "from-orange-500 to-pink-500",
      liveUrl: "https://maze-solver-jxua.onrender.com/",
      githubUrl: "https://github.com/biv3k224/Maze",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-[#FFF8F0] to-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-orange-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Scalable systems, performance optimization, and clean architecture
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300 w-fit`}
                    >
                      <project.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 rounded-full text-sm font-medium"
                        >
                          ✓ {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4 inline" />
                          View Details
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="border-2 border-gray-300 hover:border-orange-400 hover:bg-orange-50 rounded-lg"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4 inline" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div
                className={`h-1 bg-gradient-to-r ${project.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 px-8 py-6 rounded-full"
          >
            <a
              href="https://github.com/biv3k224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 inline" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 inline" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
