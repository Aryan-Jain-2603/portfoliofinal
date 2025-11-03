import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 'Comfortable' },
        { name: 'HTML & CSS', level: 'Comfortable' },
        { name: 'Tailwind CSS', level: 'Comfortable' },
        { name: 'JavaScript', level: 'Comfortable' }
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', level: 'Comfortable' },
        { name: 'Express', level: 'Comfortable' },
        { name: 'MongoDB', level: 'Comfortable' },
        { name: 'SQL', level: 'Familiar' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 'Comfortable' },
        { name: 'VS Code', level: 'Expert' },
        { name: 'Postman', level: 'Comfortable' }
      ]
    },
    {
      category: 'Languages',
      skills: [
        { name: 'Java', level: 'Comfortable' },
        { name: 'JavaScript', level: 'Comfortable' },
        { name: 'Python', level: 'Familiar' }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert':
        return 'bg-accent';
      case 'Comfortable':
        return 'bg-accent/70';
      case 'Familiar':
        return 'bg-accent/40';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <section id="skills" className="section-padding bg-background dark:bg-dark-bg">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-secondary dark:text-gray-400">
                        {skill.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${getLevelColor(skill.level)} text-white font-medium`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

