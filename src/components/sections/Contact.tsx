import { motion } from "framer-motion";
import { Mail, Phone, GitBranch, Link2, MapPin, Send } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { personal } from "../../data/resume";

export default function Contact() {
  const contacts = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      accent: "bg-violet-50 text-violet-600 border-violet-100",
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      icon: <GitBranch size={18} />,
      label: "GitHub",
      value: "github.com/pkaranje",
      href: personal.github,
      accent: "bg-gray-100 text-gray-600 border-gray-200",
    },
    {
      icon: <Link2 size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/pratikkaranje",
      href: personal.linkedin,
      accent: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: <MapPin size={18} />,
      label: "Location",
      value: personal.location,
      href: null,
      accent: "bg-rose-50 text-rose-600 border-rose-100",
    },
  ];

  return (
    <section id="contact" className="relative py-24 dot-grid overflow-hidden">
      {/* Sparkles — slate particles, low density, slow speed for subtlety */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="contact-sparkles"
          background="transparent"
          particleColor="#6366f1"
          particleDensity={20}
          minSize={0.5}
          maxSize={1.8}
          speed={0.6}
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
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Let's talk</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Get In Touch</h2>
          <p className="mt-4 text-gray-500 max-w-lg text-base leading-relaxed">
            Open to new opportunities, collaborations, and conversations about engineering and technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {contacts.map((c, index) => (
            <motion.div
              key={c.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-250 group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${c.accent}`}>
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                    <p className="text-sm font-semibold text-gray-800 truncate group-hover:text-gray-600 transition-colors">
                      {c.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${c.accent}`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{c.label}</p>
                    <p className="text-sm font-semibold text-gray-800">{c.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-center"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-700 transition-colors shadow-sm"
          >
            <Send size={15} />
            Send me an email
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {personal.name} · Built with React &amp; Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
}
