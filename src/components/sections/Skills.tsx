import { motion } from "framer-motion";
import { SparklesCore } from "../ui/sparkles";
import { skills } from "../../data/resume";

const categoryAccents: Record<string, string> = {
  "Languages & Backend": "bg-violet-50 text-violet-700 border-violet-100",
  "Cloud & AWS": "bg-orange-50 text-orange-700 border-orange-100",
  "Architecture": "bg-blue-50 text-blue-700 border-blue-100",
  "Data & Databases": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "CI/CD & DevOps": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "AI-Assisted Dev": "bg-pink-50 text-pink-700 border-pink-100",
  "Frontend": "bg-yellow-50 text-yellow-700 border-yellow-100",
  "Collaboration": "bg-slate-50 text-slate-700 border-slate-100",
};

const tagAccents: Record<string, string> = {
  "Languages & Backend": "bg-violet-50 text-violet-600 border border-violet-100",
  "Cloud & AWS": "bg-orange-50 text-orange-600 border border-orange-100",
  "Architecture": "bg-blue-50 text-blue-600 border border-blue-100",
  "Data & Databases": "bg-emerald-50 text-emerald-600 border border-emerald-100",
  "CI/CD & DevOps": "bg-cyan-50 text-cyan-600 border border-cyan-100",
  "AI-Assisted Dev": "bg-pink-50 text-pink-600 border border-pink-100",
  "Frontend": "bg-yellow-50 text-yellow-600 border border-yellow-100",
  "Collaboration": "bg-slate-50 text-slate-600 border border-slate-100",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 dot-grid overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="skills-sparkles"
          background="transparent"
          particleColor="#6366f1"
          particleDensity={25}
          minSize={0.5}
          maxSize={1.8}
          speed={0.7}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold mb-4 border ${categoryAccents[skill.category]}`}>
                {skill.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`text-xs px-2.5 py-1 rounded-full ${tagAccents[skill.category]}`}
                  >
                    {item}
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
