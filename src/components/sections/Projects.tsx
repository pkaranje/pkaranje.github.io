import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../../data/resume";

const orgColors: Record<string, string> = {
  "The Linux Foundation": "bg-purple-50 text-purple-600 border-purple-100",
  "iauro Systems": "bg-blue-50 text-blue-600 border-blue-100",
  "Equations Work": "bg-orange-50 text-orange-600 border-orange-100",
  "Open Source": "bg-emerald-50 text-emerald-600 border-emerald-100",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col hover:border-gray-200 hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                    orgColors[project.org] ?? "bg-gray-50 text-gray-600 border-gray-100"
                  }`}
                >
                  {project.org}
                </span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors leading-snug">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{project.description}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white text-gray-500 border border-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
