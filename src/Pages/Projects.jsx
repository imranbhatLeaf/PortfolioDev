const projects = [
  {
    title: "Mini Doc App",
    desc: "A document management app with full CRUD functionality.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    desc: "A full-stack MERN e-commerce platform with authentication.",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    title: "Snake Game",
    desc: "Classic snake game built using vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-white text-white px-6 md:px-16 py-24">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-16">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-slate-900 rounded-2xl p-6
              border border-slate-800
              hover:border-cyan-400
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
            "
          >
            <h3 className="text-2xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-slate-400 mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-sm rounded-full
                    bg-cyan-500/10 text-cyan-300
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
