import React, { useState } from "react";

const TransparencyDashboard = () => {
  const [activeTab, setActiveTab] = useState("financial");

  // Financial allocation data
  const financialData = [
    {
      pillar: "Education",
      percentage: 30,
      amount: "₹4.5 Cr",
      color: "bg-blue-500",
    },
    {
      pillar: "Women Empowerment",
      percentage: 25,
      amount: "₹3.75 Cr",
      color: "bg-purple-500",
    },
    {
      pillar: "Healthcare",
      percentage: 20,
      amount: "₹3 Cr",
      color: "bg-green-500",
    },
    {
      pillar: "Environmental Sustainability",
      percentage: 10,
      amount: "₹1.5 Cr",
      color: "bg-teal-500",
    },
    {
      pillar: "Digital Literacy",
      percentage: 8,
      amount: "₹1.2 Cr",
      color: "bg-orange-500",
    },
    {
      pillar: "Rural Development",
      percentage: 7,
      amount: "₹1.05 Cr",
      color: "bg-red-500",
    },
  ];

  // Impact KPIs
  const impactKPIs = [
    {
      title: "Lives Touched",
      value: "125,000+",
      change: "+12%",
      period: "vs. last year",
      icon: "👥",
    },
    {
      title: "Women Income Increase",
      value: "42% avg.",
      change: "+8%",
      period: "income growth",
      icon: "💼",
    },
    {
      title: "Literacy Improvements",
      value: "78%",
      change: "+15%",
      period: "in target areas",
      icon: "📚",
    },
    {
      title: "Volunteer Hours",
      value: "45,000",
      change: "+22%",
      period: "annual total",
      icon: "⏱️",
    },
  ];

  // Program impact data
  const programImpact = [
    {
      program: "Women Empowerment",
      metric: "Income Increase",
      before: "₹8,500",
      after: "₹12,070",
      improvement: "42%",
    },
    {
      program: "Education",
      metric: "Literacy Rate",
      before: "63%",
      after: "78%",
      improvement: "15%",
    },
    {
      program: "Healthcare",
      metric: "Access to Care",
      before: "41%",
      after: "67%",
      improvement: "26%",
    },
    {
      program: "Digital Literacy",
      metric: "Digital Skills",
      before: "22%",
      after: "58%",
      improvement: "36%",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Commitment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Navanvesha Foundation is committed to providing measurable results
            through rigorous monitoring and transparent reporting.
          </p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {impactKPIs.map((kpi, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 transform transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{kpi.icon}</span>
                <span className="text-green-600 font-bold text-lg">
                  {kpi.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{kpi.value}</h3>
              <p className="text-gray-600 font-medium">{kpi.title}</p>
              <p className="text-gray-500 text-sm mt-1">{kpi.period}</p>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <button
            onClick={() => setActiveTab("financial")}
            className={`px-6 py-3 mx-2 rounded-t-lg font-medium text-lg transition-colors ${
              activeTab === "financial"
                ? "bg-white text-blue-600 border-t border-l border-r border-gray-200"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Financial Transparency
          </button>
          <button
            onClick={() => setActiveTab("impact")}
            className={`px-6 py-3 mx-2 rounded-t-lg font-medium text-lg transition-colors ${
              activeTab === "impact"
                ? "bg-white text-blue-600 border-t border-l border-r border-gray-200"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Impact Reporting
          </button>
        </div>

        {/* Main Dashboard Content */}
        <div className="bg-white rounded-xl shadow-xl p-6 mb-10">
          {/* Financial Transparency Tab */}
          {activeTab === "financial" && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Financial Allocation
                </h2>
                <div className="text-right">
                  <p className="text-gray-600">Total Annual Budget</p>
                  <p className="text-3xl font-bold text-blue-600">₹15 Crores</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Pillars Visualization */}
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-6">
                    Allocation Across Program Pillars
                  </h3>
                  <div className="space-y-5">
                    {financialData.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {item.pillar}
                          </span>
                          <span className="font-bold text-gray-800">
                            {item.amount} ({item.percentage}%)
                          </span>
                        </div>
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full transition-all duration-700`}
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visualization */}
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
                    {/* Pie chart visualization */}
                    <div className="absolute inset-0 rounded-full border-8 border-gray-100 overflow-hidden">
                      <div
                        className="absolute w-full h-full"
                        style={{ clipPath: "circle(50% at 50% 50%)" }}
                      >
                        {financialData.reduce((acc, item, index) => {
                          const prevPercentage = acc;
                          const rotation = (prevPercentage / 100) * 360;
                          return (
                            <React.Fragment key={index}>
                              <div
                                className={`absolute w-full h-full ${item.color} opacity-80`}
                                style={{
                                  clipPath: `conic-gradient(transparent 0% ${prevPercentage}%, currentColor ${prevPercentage}% ${
                                    prevPercentage + item.percentage
                                  }%, transparent ${
                                    prevPercentage + item.percentage
                                  }% 100%)`,
                                  transform: `rotate(${rotation}deg)`,
                                }}
                              ></div>
                              {acc + item.percentage}
                            </React.Fragment>
                          );
                        }, 0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-500 text-sm">Total</p>
                        <p className="text-2xl font-bold text-gray-800">
                          ₹15 Cr
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="grid grid-cols-2 gap-3">
                    {financialData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <span className="text-sm text-gray-700">
                          {item.pillar}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Annual Financial Statements
                </h3>
                <p className="text-gray-600 mb-6">
                  We provide clear, annual financial statements detailing the
                  allocation of funds across our six program pillars. All our
                  financial records are audited by independent third-party
                  auditors.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Download FY 2023-24 Report (PDF)
                  </button>
                  <button className="px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    View Previous Reports
                  </button>
                  <button className="px-5 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                    Interactive Financial Dashboard
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Impact Reporting Tab */}
          {activeTab === "impact" && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Impact Reporting
                </h2>
                <p className="text-gray-600">
                  Our annual reports detail key performance indicators (KPIs) to
                  demonstrate the tangible impact of every rupee spent and every
                  hour volunteered.
                </p>
              </div>

              {/* Program Impact Table */}
              <div className="overflow-x-auto mb-10">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Program Impact Metrics
                </h3>
                <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Program
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Metric
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Before Intervention
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        After Intervention
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Improvement
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {programImpact.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">
                          {item.program}
                        </td>
                        <td className="px-6 py-4 text-gray-700">
                          {item.metric}
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {item.before}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                            {item.after}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                            {item.improvement}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Visual Impact Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Volunteer Impact
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Total Volunteer Hours</span>
                    <span className="text-2xl font-bold text-blue-600">
                      45,000
                    </span>
                  </div>
                  <div className="h-4 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">
                    Equivalent to <span className="font-bold">₹2.25 Cr</span> in
                    value contributed by volunteers across all programs.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Geographic Reach
                  </h3>
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">🗺️</div>
                    <div>
                      <p className="text-2xl font-bold text-green-700">
                        8 States
                      </p>
                      <p className="text-gray-600">125 districts covered</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Our programs have directly impacted communities across 8
                    Indian states, with 72% of beneficiaries from rural areas.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">
                  Annual Impact Reports
                </h3>
                <p className="text-gray-600 mb-6">
                  Download our detailed annual impact reports to see how we
                  track the tangible impact of our work, including beneficiary
                  stories and longitudinal studies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                    Download Impact Report 2024
                  </button>
                  <button className="px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    View Success Stories
                  </button>
                  <button className="px-5 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors font-medium">
                    Interactive Impact Dashboard
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Commitment Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Our Commitment to Transparency
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            We use rigorous monitoring and evaluation frameworks to track the
            tangible impact of every rupee spent and every hour volunteered.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-2xl">100%</p>
              <p>Financial Transparency</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-2xl">6 Pillars</p>
              <p>of Program Focus</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-2xl">85%</p>
              <p>Funds to Programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransparencyDashboard;
