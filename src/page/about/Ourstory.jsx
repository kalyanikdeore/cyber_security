import React from "react";
import {
  HeartIcon,
  LightBulbIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const OurStory = () => {
  const focusAreas = [
    {
      title: "Bridging Skill Gaps",
      description: "Preparing individuals for the jobs of tomorrow.",
      icon: <AcademicCapIcon className="h-10 w-10" />,
    },
    {
      title: "Fostering Innovation",
      description: "Cultivating problem-solving mindsets among youth.",
      icon: <LightBulbIcon className="h-10 w-10" />,
    },
    {
      title: "Ensuring Digital Inclusion",
      description: "Bringing essential technology to the underserved.",
      icon: <ComputerDesktopIcon className="h-10 w-10" />,
    },
  ];

  const partners = [
    {
      type: "Corporate CSR Partners",
      icon: <BuildingOffice2Icon className="h-8 w-8" />,
    },
    {
      type: "Government Institutions",
      icon: <BuildingOffice2Icon className="h-8 w-8" />,
    },
    {
      type: "Local Grassroots Organizations",
      icon: <UserGroupIcon className="h-8 w-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl mb-6">
            <HeartIcon className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by{" "}
            <span className="font-semibold text-blue-600">Social Impact</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Navanvesha Foundation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                A socially driven, non-profit organization established with the
                core belief that{" "}
                <span className="font-bold text-blue-700">
                  every individual deserves the knowledge and opportunity to
                  grow, learn, and thrive.
                </span>
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Commitment
                </h3>
                <p className="text-gray-700">
                  We are committed to empowering communities through education,
                  digital transformation, and sustainable development
                  initiatives.
                </p>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Collaborating for Impact
              </h3>
              <p className="text-center text-gray-300 mb-8">
                We specialize in designing and delivering high-impact programs
                in collaboration with:
              </p>
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <div className="p-2 bg-blue-500 rounded-lg">
                      {partner.icon}
                    </div>
                    <span className="font-medium">{partner.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Focus Areas */}
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-1 shadow-xl">
              <div className="bg-white rounded-xl p-8 h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                  Creating{" "}
                  <span className="text-blue-600">Pathways for Growth</span>
                </h2>

                <div className="space-y-8">
                  {focusAreas.map((area, index) => (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-6 p-6 rounded-xl border border-gray-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                        <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl text-blue-600 group-hover:scale-110 transition-transform duration-300">
                          {area.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {area.title}
                          </h3>
                          <p className="text-gray-700">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                  <p className="text-gray-700 italic">
                    "Our focus is always on creating sustainable impact that
                    transforms lives and communities."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-blue-500">
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <div className="text-gray-800 font-semibold">
              Communities Empowered
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-teal-500">
            <div className="text-4xl font-bold text-teal-600 mb-2">50+</div>
            <div className="text-gray-800 font-semibold">
              Impactful Programs
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-purple-500">
            <div className="text-4xl font-bold text-purple-600 mb-2">1000s</div>
            <div className="text-gray-800 font-semibold">Lives Transformed</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Join Our Mission
          </button>
          <p className="text-gray-600 mt-4">
            Together, we can create a future where everyone has the opportunity
            to thrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
