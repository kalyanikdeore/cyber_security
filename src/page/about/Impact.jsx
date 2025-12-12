import React from "react";
import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBalanceScale,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function TransparencyImpact({
  annualReportLink = "#",
  financialsLink = "#",
}) {
  const kpis = [
    { id: 1, value: "12,450+", label: "Lives Empowered", icon: FaUsers },
    { id: 2, value: "₹2.3 Cr", label: "Funds Allocated", icon: FaBalanceScale },
    { id: 3, value: "+38%", label: "Women Income Growth", icon: FaChartLine },
    { id: 4, value: "89%", label: "Literacy Improvement", icon: FaFileAlt },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8f4ef] to-white dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
        >
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
              Our Commitment:{" "}
              <span className="text-[#926b49]">Transparency</span> & Impact
            </h2>

            <p className="mt-5 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Navanvesha Foundation ensures measurable transformation. With
              strong monitoring systems and audited evaluations, every rupee is
              invested in building sustainable impact for communities.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-[#926b49] text-lg shadow-sm font-bold">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-lg">
                    Financial Transparency
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Detailed annual audited statements ensuring accountability.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-[#926b49] text-lg shadow-sm font-bold">
                  ⎯
                </span>
                <div>
                  <h4 className="font-semibold text-lg">Impact Reporting</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    KPI reports showcasing real-world community impact outcomes.
                  </p>
                </div>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={annualReportLink}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#926b49] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#7d5638] transition"
              >
                <FaFileAlt className="text-lg" /> Annual Impact Reports
              </a>

              <a
                href={financialsLink}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#926b49] px-6 py-3 text-[#926b49] font-semibold shadow-md hover:bg-amber-50 transition"
              >
                <FaBalanceScale className="text-lg" /> Financial Statements
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Want a downloadable version?{" "}
              <a href={annualReportLink} className="underline font-medium">
                Click here for PDF
              </a>
            </p>
          </div>

          {/* KPI Cards */}
          <aside className="space-y-6">
            <div className="rounded-2xl p-5 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-amber-200/50 shadow-xl">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Key Performance Indicators
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Latest Snapshot
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      key={kpi.id}
                      className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition ring-1 ring-amber-200/40"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-100 dark:bg-slate-700 text-[#926b49] text-xl">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {kpi.label}
                          </p>
                          <p className="text-xl font-bold">{kpi.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                *Statistics updated annually based on audited evaluations.
              </p>
            </div>

            <div className="rounded-2xl p-5 border border-amber-200/40 bg-gradient-to-br from-[#926b49]/10 to-white/20 shadow-md">
              <h4 className="text-sm font-semibold">Get Involved</h4>
              <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">
                Become part of our mission to support community transformation.
              </p>

              <div className="mt-4 flex gap-3">
                <button className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold bg-[#926b49] text-white hover:bg-[#7d5638] transition">
                  Donate
                </button>
                <button className="flex-1 rounded-lg px-4 py-2 text-sm font-semibold border border-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition">
                  Volunteer
                </button>
              </div>
            </div>
          </aside>
        </motion.div>

        <div className="mt-10 text-xs text-center text-slate-600 dark:text-slate-400">
          All figures are verified through audited monitoring & evaluation
          frameworks.
        </div>
      </div>
    </section>
  );
}
