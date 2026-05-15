import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { experience } from "../../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Career journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Experience</h2>
        </motion.div>

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ y: 28, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  <p className="text-gray-500 font-medium mt-1">{job.company}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-gray-600 border border-gray-200 whitespace-nowrap self-start">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2.5">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                    <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
