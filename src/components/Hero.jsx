import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center section-padding pt-32 md:pt-20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi — I'm Aryan.{' '}
            <span className="text-secondary dark:text-gray-400">
              I build fast, friendly web apps.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary dark:text-gray-400 mb-8 max-w-readable">
            Third-year BTech (CSE) at Jain University. I focus on front-end and full-stack 
            projects using React, Node, and MongoDB.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              View projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-primary dark:border-dark-text text-primary dark:text-dark-text rounded-md hover:bg-primary hover:text-white dark:hover:bg-dark-text dark:hover:text-dark-bg transition-all duration-300"
            >
              Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <a
              href="https://github.com/ManthanPadalia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

