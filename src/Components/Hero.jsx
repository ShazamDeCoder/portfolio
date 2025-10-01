import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImage from "../assets/profile.png"; // Add your image path here

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-white pt-30 flex items-center justify-center relative overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-6 mx-auto">
        {/* Profile Image */}
        <div className=" flex justify-center">
          <img
            src={profileImage}
            alt="Mubarak"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-green-600 shadow-lg object-cover"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-600">Hi, I'm </span>
          <span className="text-green-600">Mubarak</span>
        </h1>

        <p className="text-xl md:text-[22px] text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Frontend Developer creating responsive, user-friendly web experiences with modern technologies and meticulous attention to detail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 flex items-center gap-2"
          >
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            Available
          </button>

          <button
            onClick={() => scrollToSection("#projects")}
            className="px-4 py-3 rounded-full border border-green-700 text-gray-600 hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            View My Work
          </button>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/ShazamDeCoder"
            className="text-gray-600 hover:text-green-600 p-2 hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/adiomubarak76"
            className="text-gray-600 hover:text-green-600 p-2 hover:scale-110 "
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:adiomubarakadebukola2026@gmail.com"
            className="text-gray-600 hover:text-green-600 p-2 hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a> 
        </div>
      </div>
    </section>
  );
};

export default Hero;
