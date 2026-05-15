import { motion } from "framer-motion";
import { MapPin, ExternalLink, Download, Zap } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { personal } from "../../data/resume";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "500+", label: "OSS Plugin Stars" },
  { value: "6+", label: "Major Projects" },
  { value: "2+", label: "Global Orgs" },
];

const fadeUp = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen dot-grid flex items-center pt-20 pb-10 overflow-hidden"
    >
      {/* Sparkles layer — dark indigo particles visible on light background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          particleColor="#6366f1"
          particleDensity={30}
          minSize={0.6}
          maxSize={2}
          speed={0.8}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_420px] gap-0 min-h-[560px]">
            {/* ── Left: text content ── */}
            <div className="p-10 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Specialty badge */}
                <motion.div {...fadeUp(0.1)} className="mb-7">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-xs font-medium">
                    <Zap size={13} className="text-amber-500" />
                    Python Backend &amp; AWS Cloud Platforms
                  </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                  {...fadeUp(0.18)}
                  className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6"
                >
                  {personal.name.split(" ").map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </motion.h1>

                {/* Summary */}
                <motion.p
                  {...fadeUp(0.26)}
                  className="text-gray-500 text-base leading-relaxed max-w-lg mb-8"
                >
                  Engineering Lead and Solution Architect with 12+ years of
                  experience building backend platforms, SaaS products, and
                  cloud-native applications using Python and AWS technologies.
                </motion.p>

                {/* Location + links */}
                <motion.div
                  {...fadeUp(0.32)}
                  className="flex flex-wrap items-center gap-2 mb-10"
                >
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-xs font-medium">
                    <MapPin size={12} />
                    {personal.location}
                  </span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-xs font-medium hover:border-gray-400 hover:text-gray-800 transition-colors"
                  >
                    LinkedIn <ExternalLink size={11} />
                  </a>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-xs font-medium hover:border-gray-400 hover:text-gray-800 transition-colors"
                  >
                    GitHub <ExternalLink size={11} />
                  </a>
                </motion.div>

                {/* CTA buttons */}
                <motion.div {...fadeUp(0.38)} className="flex flex-wrap gap-3">
                  <a
                    href={`mailto:${personal.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors shadow-sm"
                  >
                    Start a conversation
                  </a>
                  <a
                    href="/CV_Pratik_Karanje.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  >
                    <Download size={15} />
                    Download Resume
                  </a>
                </motion.div>
              </div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100"
              >
                {stats.map((s, i) => (
                  <div key={i} className="bg-white px-5 py-4">
                    <p className="text-2xl font-bold text-gray-900">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right: photo card ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
              className="relative bg-gray-50 border-l border-gray-100 flex flex-col"
            >
              {/* Profile photo */}
              <div className="flex-1 relative overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Pratik Karanje"
                  className="w-full h-full object-cover object-top"
                  style={{ minHeight: 340 }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=Pratik+Karanje&size=600&background=e2e8f0&color=475569&bold=true&font-size=0.35";
                  }}
                />
              </div>

              {/* Current Focus card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative m-4"
              >
                {/* Glow layer behind the card */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 opacity-40 blur-sm" />

                {/* Card */}
                <div className="relative p-4 bg-white rounded-2xl border border-emerald-100 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase">
                      Current Focus
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Generative AI, Agentic AI, cloud-native backend platforms,
                    and AI-assisted engineering workflows.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
