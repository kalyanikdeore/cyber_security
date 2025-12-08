import React, { useState } from "react";

const AboutUs = () => {
  const [missingWords, setMissingWords] = useState({
    section1: "",
    section2: "",
    section3: "",
    section4: "",
  });

  const [answers, setAnswers] = useState({
    section1: "",
    section2: "",
    section3: "",
    section4: "",
  });

  const correctAnswers = {
    section1: "organization",
    section2: "bridge",
    section3: "non-profit",
    section4: "pathways",
  };

  const checkAnswer = (section) => {
    if (answers[section].toLowerCase() === correctAnswers[section]) {
      setMissingWords((prev) => ({
        ...prev,
        [section]: correctAnswers[section],
      }));
      setAnswers((prev) => ({
        ...prev,
        [section]: "",
      }));
    } else {
      alert(
        `Try again! Hint: The missing word relates to "${
          section === "section1"
            ? "what type of entity we are"
            : section === "section2"
            ? "connecting element"
            : section === "section3"
            ? "legal structure"
            : "growth channels"
        }"`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Journey of Renewal
          </h1>
          <p className="text-xl text-gray-600 italic">
            Who We Are and Why We Exist
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="md:flex">
            {/* Left Column - Main Content */}
            <div className="md:w-2/3 p-8 md:p-12">
              {/* Navanvesha Section */}
              <section className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold">
                      Navanvesha: The Meaning Behind Our Name
                    </h2>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <span className="font-bold text-3xl text-blue-700">
                    Navanvesha
                  </span>{" "}
                  means
                  <span className="bg-yellow-100 px-2 py-1 rounded">
                    "New Exploration"
                  </span>{" "}
                  or
                  <span className="bg-yellow-100 px-2 py-1 rounded">
                    "Renewed Discovery."
                  </span>
                </p>
              </section>

              {/* Philosophy Section */}
              <section className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Philosophy
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  It symbolizes the spirit of curiosity, innovation, and
                  continuous learning—a vital
                  <input
                    type="text"
                    value={answers.section2}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        section2: e.target.value,
                      }))
                    }
                    className={`mx-2 w-32 px-3 py-1 border-2 ${
                      missingWords.section2
                        ? "border-green-500 bg-green-50"
                        : "border-dashed border-blue-400"
                    } rounded text-center font-semibold`}
                    placeholder="______"
                    disabled={!!missingWords.section2}
                  />
                  between traditional wisdom and modern creativity. This
                  commitment to exploration ensures that our programs are always
                  relevant, adaptive, and focused on delivering the most
                  effective solutions to contemporary challenges.
                </p>
                {!missingWords.section2 && (
                  <button
                    onClick={() => checkAnswer("section2")}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Check Answer
                  </button>
                )}
              </section>

              {/* Foundation Section */}
              <section className="mb-12">
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span
                    className={`font-bold text-2xl ${
                      missingWords.section1 ? "text-green-600" : "text-blue-700"
                    }`}
                  >
                    Navanvesha Foundation
                  </span>{" "}
                  is a socially driven,
                  <input
                    type="text"
                    value={answers.section3}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        section3: e.target.value,
                      }))
                    }
                    className={`mx-2 w-32 px-3 py-1 border-2 ${
                      missingWords.section3
                        ? "border-green-500 bg-green-50"
                        : "border-dashed border-blue-400"
                    } rounded text-center font-semibold`}
                    placeholder="______"
                    disabled={!!missingWords.section3}
                  />
                  <span className="font-bold text-blue-700">
                    {missingWords.section3}
                  </span>{" "}
                  established with the core belief that every individual
                  deserves the knowledge and opportunity to grow, learn, and
                  thrive.
                </p>
                {!missingWords.section3 && (
                  <button
                    onClick={() => checkAnswer("section3")}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Check Answer
                  </button>
                )}
              </section>

              {/* Mission Section */}
              <section className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl mb-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Commitment
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We are committed to empowering communities through education,
                  digital transformation, and sustainable development
                  initiatives. We specialize in designing and delivering
                  high-impact programs, often in collaboration with corporate
                  CSR partners, government institutions, and local grassroots
                  organizations.
                </p>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Our focus is always on creating
                    <input
                      type="text"
                      value={answers.section4}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          section4: e.target.value,
                        }))
                      }
                      className={`mx-2 w-32 px-3 py-1 border-2 ${
                        missingWords.section4
                          ? "border-green-500 bg-green-50"
                          : "border-dashed border-blue-400"
                      } rounded text-center font-semibold`}
                      placeholder="______"
                      disabled={!!missingWords.section4}
                    />
                    <span className="font-bold text-green-600">
                      {missingWords.section4}
                    </span>{" "}
                    for growth by:
                  </h4>

                  <div className="space-y-4 mt-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <span className="text-blue-600 font-bold text-lg">
                          ①
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">
                          Bridging Skill Gaps
                        </h5>
                        <p className="text-gray-700">
                          Preparing individuals for the jobs of tomorrow.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 p-3 rounded-lg mr-4">
                        <span className="text-purple-600 font-bold text-lg">
                          ②
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">
                          Fostering Innovation
                        </h5>
                        <p className="text-gray-700">
                          Cultivating problem-solving mindsets among youth.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-100 p-3 rounded-lg mr-4">
                        <span className="text-green-600 font-bold text-lg">
                          ③
                        </span>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-lg">
                          Ensuring Digital Inclusion
                        </h5>
                        <p className="text-gray-700">
                          Bringing essential technology to the underserved.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {!missingWords.section4 && (
                  <button
                    onClick={() => checkAnswer("section4")}
                    className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Check Answer
                  </button>
                )}
              </section>

              {/* Missing Words Progress */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Missing Words Progress
                </h4>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(missingWords).map(([key, word]) => (
                    <div key={key} className="flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mr-2
                        ${word ? "bg-green-500" : "bg-gray-300"}`}
                      >
                        <span className="text-white font-bold">
                          {word ? "✓" : "?"}
                        </span>
                      </div>
                      <span className="font-medium">{word || "Not found"}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Panel */}
            <div className="md:w-1/3 bg-gradient-to-b from-blue-500 to-purple-600 text-white p-8">
              <div className="sticky top-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">
                    Word Hunt Challenge
                  </h3>
                  <p className="mb-4">
                    Each section is missing one important word. Can you find
                    them all?
                  </p>
                  <div className="bg-white/20 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Hints:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        A connecting structure between two points
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Not-for-profit entity
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                        Routes or channels for advancement
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">
                    About The Foundation
                  </h3>
                  <p className="mb-4">
                    Navanvesha Foundation embodies the spirit of continuous
                    exploration and growth, creating meaningful impact through:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-500 font-bold">✓</span>
                      </div>
                      <span>Education & Empowerment</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-500 font-bold">✓</span>
                      </div>
                      <span>Digital Transformation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                        <span className="text-blue-500 font-bold">✓</span>
                      </div>
                      <span>Sustainable Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>Discover all missing words to complete our story!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
