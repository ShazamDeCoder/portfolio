import React, { useEffect, useState } from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 90 },
      { name: "Tailwind CSS", level: 88 }
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Vite", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Vercel", level: 100 },

    ],
  },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <>
      <section id="skills" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl font-bold text-center text-gray-600 mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Skills & Technologies
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className={`flex flex-col h-full transition-all duration-700 delay-${categoryIndex * 200} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                  <h3 className="text-2xl font-semibold text-green-600 mb-8">{category.title}</h3>
                  <div className="space-y-6 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`transition-all duration-700 delay-${skillIndex * 100} ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      >
                        {skill.name ? (
                          <>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-600 font-medium">{skill.name}</span>
                              <span className="text-gray-600 text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: visible ? `${skill.level}%` : 0 }}
                              />
                            </div>
                          </>
                        ) : (
                          <div className="h-10" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

