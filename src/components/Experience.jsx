import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
          
          <div className="max-w-3xl">
            <div className="border-l-2 border-accent pl-6 pb-8">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Backend Developer Intern</h3>
                  <p className="text-accent font-medium">Slashmonk</p>
                </div>
                <span className="text-sm text-secondary dark:text-gray-400">
                  Jun 2024 – Jul 2024
                </span>
              </div>
              <ul className="space-y-2 text-secondary dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Worked on SQL Database components </span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Implemented accessibility improvements following WCAG guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2 mt-1">•</span>
                  <span>Optimized page load performance and reduced bundle size</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

