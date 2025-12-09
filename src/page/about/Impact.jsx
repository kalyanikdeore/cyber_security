import React from "react";
import {
  FaFileAlt,
  FaBalanceScale,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

// TransparencyImpactComponent.jsx
// Single-file React component using Tailwind CSS
// Usage: Place <TransparencyImpact /> inside any page. Ensure Tailwind is configured and
// `react-icons` is installed (npm i react-icons).

export default function TransparencyImpact({
  annualReportLink = "#",
  financialsLink = "#",
}) {
  const kpis = [
    { id: 1, value: "12,450+", label: "Lives Touched", icon: FaUsers },
    {
      id: 2,
      value: "₹ 2.3 Cr",
      label: "Funds Allocated",
      icon: FaBalanceScale,
    },
    { id: 3, value: "+38%", label: "Women Income Growth", icon: FaChartLine },
    { id: 4, value: "89%", label: "Literacy Improvement", icon: FaFileAlt },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column: Heading + Description + CTAs */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Our Commitment :{" "}
              <span className="text-[#926b49]">Transparency</span> and Impact
            </h2>

            <p className="mt-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Navanvesha Foundation is committed to providing measurable
              results. We use rigorous monitoring and evaluation frameworks to
              track the tangible impact of every rupee spent and every hour
              volunteered.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-[#926b49] ring-1 ring-amber-100">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold">Financial Transparency</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    We provide clear, annual financial statements detailing the
                    allocation of funds across our six program pillars.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-[#926b49] ring-1 ring-amber-100">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 12h18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold">Impact Reporting</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Our annual reports detail KPIs such as lives touched,
                    women’s income growth, and literacy rate improvements.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={annualReportLink}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#926b49] px-4 py-2 text-white font-medium shadow hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Open Annual Impact Reports"
              >
                <FaFileAlt />
                <span>Annual Impact Reports</span>
              </a>

              <a
                href={financialsLink}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-[#926b49] px-4 py-2 text-[#926b49] font-medium bg-white hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-200"
                aria-label="Open Financial Statements"
              >
                <FaBalanceScale />
                <span>Financial Statements</span>
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Prefer a downloadable packet?{" "}
              <a href={annualReportLink} className="underline">
                Download the full impact packet (PDF)
              </a>
              .
            </p>
          </div>

          {/* Right column: KPI cards */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-100 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                Key Performance Indicators
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Latest consolidated snapshot
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {kpis.map((kpi) => {
                  const Icon = kpi.icon;
                  return (
                    <div
                      key={kpi.id}
                      className="flex flex-col items-start gap-2 rounded-lg bg-white dark:bg-slate-900 p-3 ring-1 ring-slate-100 dark:ring-slate-700"
                    >
                      <div className="flex items-center gap-3">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-50 text-[#926b49]">
                          <Icon />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {kpi.label}
                          </p>
                          <p className="text-lg font-semibold leading-none">
                            {kpi.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Note: KPI figures are illustrative. Replace with real values
                from your monitoring systems.
              </div>
            </div>

            <div className="rounded-2xl p-4 border border-slate-100 dark:border-slate-700 bg-gradient-to-br from-amber-50/40 to-white/20">
              <h4 className="text-sm font-semibold">Get Involved</h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Support transparent impact: donate, volunteer, or partner with
                us.
              </p>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 rounded-md px-3 py-2 text-sm font-medium bg-[#926b49] text-white hover:opacity-95">
                  Donate
                </button>
                <button className="flex-1 rounded-md px-3 py-2 text-sm font-medium border border-slate-200">
                  Volunteer
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer small print */}
        <div className="mt-8 text-xs text-slate-500 dark:text-slate-400">
          <strong>Note:</strong> All figures in reports are verified through our
          monitoring & evaluation framework and external auditors where
          applicable.
        </div>
      </div>
    </section>
  );
}
