const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

const Skills = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="
                border border-gray-200 rounded-xl p-6
                hover:shadow-lg transition
              "
            >
              <h3 className="text-xl font-semibold mb-4">
                {category}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {items.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
