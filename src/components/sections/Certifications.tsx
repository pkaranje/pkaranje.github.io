import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { certifications, education } from "../../data/resume";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 dot-grid overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="certifications-sparkles"
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Credentials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Certifications &amp; Education</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-violet-50 flex items-center justify-center">
                <Award size={18} className="text-violet-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -16, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{cert.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{cert.issuer}</p>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      cert.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                        : "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}
                  >
                    {cert.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education + Languages */}
          <div className="space-y-4">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
            >
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <GraduationCap size={18} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="py-3 border-b border-gray-50 last:border-0">
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{edu.degree}</p>
                    <p className="text-xs text-gray-500 mt-1">{edu.institution}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <p className="text-sm font-bold text-gray-900 mb-4">Languages</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: "English", level: "Professional" },
                  { lang: "Hindi", level: "Professional" },
                  { lang: "Marathi", level: "Native" },
                ].map((l) => (
                  <div key={l.lang} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="text-sm font-semibold text-gray-800">{l.lang}</span>
                    <span className="text-xs text-gray-400">{l.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
