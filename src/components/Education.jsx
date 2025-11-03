import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    'Generative AI — GDSC',
    'AI Fundamentals — IBM',
    'Problem-Solving — UC Irvine'
  ];

  return (
    <section className="section-padding bg-background dark:bg-dark-bg">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
          
          <div className="max-w-3xl space-y-8">
            {/* University */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                <div>
                  <h3 className="text-xl font-semibold mb-1">B.Tech in Computer Science</h3>
                  <p className="text-accent font-medium">Jain University</p>
                </div>
                <span className="text-sm text-secondary dark:text-gray-400">
                  2022 – 2026
                </span>
              </div>
              <p className="text-secondary dark:text-gray-400">
                CGPA: <span className="font-semibold text-accent">8.5</span>
              </p>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center text-secondary dark:text-gray-400"
                  >
                    <svg className="w-5 h-5 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

