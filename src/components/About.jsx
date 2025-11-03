import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background dark:bg-dark-bg">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
          
          <p className="text-lg text-secondary dark:text-gray-400 max-w-readable leading-relaxed mb-8">
            I'm a Bengaluru-based CSE student (CGPA 8.5) who enjoys building practical 
            web apps—things people use. I like clean UI, readable code, and building 
            projects that ship. I care about performance, accessibility, and creating 
            small tools that solve everyday problems.
          </p>

          <div className="flex flex-wrap gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-secondary dark:text-gray-400">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">1</div>
              <div className="text-sm text-secondary dark:text-gray-400">Internship</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">9.2</div>
              <div className="text-sm text-secondary dark:text-gray-400">CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

