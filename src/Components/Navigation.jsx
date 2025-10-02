import { useState, useEffect } from "react";
import { Home, User, Code, Folder, Mail, FileText } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Contact", href: "#contact", icon: Mail },
    { name: "Resume", href: "/resume.pdf", icon: FileText },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      navItems.forEach((item) => {
        if (item.name !== "Resume") {
          const section = document.querySelector(item.href);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(item.href.substring(1));
            }
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(href.substring(1));
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-300
        ${isScrolled
          ? "bg-gray/80 backdrop-blur-lg py-3 rounded-full max-w-xl mt-4 shadow-lg ring-1 ring-gray-300"
          : "bg-white py-4 rounded-none max-w-6xl mt-0"
        } w-full z-50`}
    >
      <div className="mx-auto px-6">
        <div className="flex items-center justify-center">
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.name === "Resume" ? (
                <li key={item.name}>
                  <a
                    href={item.href}
                    download
                    className="ml-12 px-4 py-2 border rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-200 animate-pulse"
                  >
                    {item.name}
                  </a>
                </li>
              ) : (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    aria-current={
                      activeSection === item.href.substring(1)
                        ? "page"
                        : undefined
                    }
                    className={`transition-colors duration-200 relative group ${
                      activeSection === item.href.substring(1)
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 font-semibold hover:text-green-600"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-200 ${
                        activeSection === item.href.substring(1)
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </button>
                </li>
              )
            )}
          </ul>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;

              if (item.name === "Resume") {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    download
                    className="text-gray-400 hover:text-green-600 transition-colors duration-200 animate-pulse"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              }

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`transition-colors duration-200 ${
                    activeSection === item.href.substring(1)
                      ? "text-green-600"
                      : "text-gray-400 hover:text-green-600"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
