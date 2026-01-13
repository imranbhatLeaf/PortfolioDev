const About = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 md:px-16 py-24 flex items-center">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          About Me
        </h2>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-8 text-gray-700">
          I’m Imran, a Computer Science student and Full Stack Developer
          specializing in the MERN stack. I enjoy building clean, scalable,
          and user-friendly web applications while continuously learning
          modern technologies.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/imranbhatLeaf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 border border-black rounded-lg
              font-medium transition
              hover:bg-black hover:text-white
            "
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/imran-bhat-035a23352/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 border border-black rounded-lg
              font-medium transition
              hover:bg-black hover:text-white
            "
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
