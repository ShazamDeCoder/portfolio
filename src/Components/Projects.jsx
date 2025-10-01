import { FiExternalLink, FiGithub } from "react-icons/fi";
import projects from "../Data/ProjectsData";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in frontend
            development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-2 border-green-500 rounded overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0"
            >
              {/* Project Image */}
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-fill"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col justify-center text-black">
                <div className="flex items-center gap-2 mb-3">
                  {project.featured && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <span className="text-sm text-gray-600">
                    Project {project.id.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-green-500 rounded text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 mt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 px-5 py-3 bg-green-600 text-white font-medium rounded-full shadow-md transition hover:bg-green-700 hover:scale-105"
                  >
                    <FiExternalLink className="text-lg" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 px-5 py-3 bg-gray-800 text-white font-medium rounded-full shadow-md transition hover:bg-gray-900 hover:scale-105"
                  >
                    <FiGithub className="text-lg" /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/ShazamDeCoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-green-500 rounded-full text-gray-600 font-medium hover:bg-gray-100 transition"
          >
            <FiGithub /> View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
