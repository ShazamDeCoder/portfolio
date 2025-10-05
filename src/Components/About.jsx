import { FiCode, FiZap, FiUsers } from "react-icons/fi";
import { BsPalette } from "react-icons/bs";

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: <BsPalette className="h-6 w-6" />,
      title: "UI/UX Focus",
      description: "Creating intuitive interfaces with attention to user experience"
    },
    {
      icon: <FiZap className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <FiUsers className="h-6 w-6" />,
      title: "Collaboration",
      description: "Working effectively in agile teams and cross-functional environments"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-600 md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I'm Mubarak, a passionate <strong>Frontend Developer in Nigeria</strong> with 1+ years of experience building <strong>modern web applications</strong>. I specialize in <strong>React.js</strong> and love creating seamless user experiences that combine beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-green-600">My Journey</h3>
            <p className="text-gray-600 text-xl leading-relaxed mb-6 text-justify [word-spacing:-1px]">
              Starting as a self-taught developer, I quickly fell in love with
              the creative problem-solving aspect of <strong>frontend development</strong>.
              From building my first HTML page to creating complex <strong>React applications</strong>,
              I've consistently pushed myself to learn new technologies and improve my craft.
            </p>
            <p className="text-gray-600 text-xl leading-relaxed text-justify [word-spacing:-1px]">
              Today, I focus on delivering exceptional digital experiences using 
              modern frameworks and tools. I believe in writing <strong>clean, 
              maintainable code</strong> while staying up-to-date with the latest 
              industry trends and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="border-2 border-green-500 p-6 text-center rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-green-600 mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-gray-600 font-bold mb-2">{item.title}</h4>
                <p className="text-m w-full text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
