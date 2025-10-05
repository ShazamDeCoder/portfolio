import { useState } from "react";
import { FiSend, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [showNotification, setShowNotification] = useState(false);
  const [animateNotification, setAnimateNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNotification({ message: "Sending...", type: "success" });
    setShowNotification(true);
    setAnimateNotification(true);

    try {
      const response = await fetch("https://formspree.io/f/xdkzzyjg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification({ message: "Message sent! Thank you.", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        setNotification({
          message: data.errors ? data.errors.map(e => e.message).join(", ") : "Oops! Something went wrong.",
          type: "error"
        });
      }
    } catch (error) {
      setNotification({ message: "Oops! Something went wrong.", type: "error" });
    }

    setTimeout(() => setAnimateNotification(false), 3000);
    setTimeout(() => setShowNotification(false), 3500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: <FiMail />, label: "Email", value: "adiomubarakadebukola2026@gmail.com", href: "mailto:adiomubarakadebukola2026@gmail.com" },
    { icon: <FiPhone />, label: "Phone", value: "+234 (907) 007-2767", href: "tel:+2349070072767" },
    { icon: <FiMapPin />, label: "Location", value: "Ibadan, Ng", href: "https://www.google.com/maps/place/Ibadan,+Nigeria" }
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: "GitHub", href: "https://github.com/ShazamDeCoder" },
    { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/adiomubarak76" },
    { icon: <FiTwitter />, label: "Twitter", href: "https://twitter.com/Mkayshazam" }
  ];

  return (
    <section id="contact" className="py-16 px-6 md:px-12 lg:px-20 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-600">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and bring your ideas to life.
            I'm always excited to take on new challenges.
          </p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="border-2 border-green-600 p-6 md:p-8 rounded-lg shadow-md relative">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-gray-600">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 border-2 border-green-600 rounded focus:outline-none text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 border-2 border-green-600 rounded focus:outline-none text-sm sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 sm:p-4 border-2 rounded border-green-600 resize-none focus:outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-full p-3 sm:p-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition text-sm sm:text-base"
              >
                <FiSend className="mr-2" /> Send Message
              </button>
            </form>

            {/* Notification */}
            {showNotification && (
              <div
                className={`absolute left-1/2 bottom-4 transform -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-white transition-all duration-500 ${
                  animateNotification ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}`}
              >
                {notification.message}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            {/* Connect Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-green-600">
                Let's Connect
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                I'm currently available for freelance work and full-time opportunities.
                Whether you have a project in mind or just want to chat about web development,
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 sm:space-y-4 ">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border-2 border-green-600 rounded hover:shadow-md transition text-sm sm:text-base"
                >
                  <div className="text-green-600 text-lg sm:text-xl">{item.icon}</div>
                  <div>
                    <div className="text-xs sm:text-sm text-gray-600">{item.label}</div>
                    <div className="font-medium text-gray-600 text-sm sm:text-base">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-green-600">Follow Me</h4>
              <div className="flex gap-2 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-3 border-2 border-green-600 rounded text-gray-600 hover:text-green-600 hover:shadow-md transition text-base sm:text-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Contact;
