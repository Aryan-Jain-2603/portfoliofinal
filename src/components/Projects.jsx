import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Candela',
      tech: 'Node.js, Express, MongoDB, EJS',
      achievements: [
        'Built a community-based resale marketplace for campus communities',
        'Implemented listing and filtering APIs with community scoping for better discovery',
        'Optimized MongoDB queries for multi-community scale and fast search results'
      ],
      github: 'https://github.com/ManthanPadalia',
      demo: null
    },
    {
      title: 'Subsplit',
      tech: 'Node.js, Express, MongoDB, Razorpay, EJS',
      achievements: [
        'Created a subscription-sharing platform for group payments',
        'Integrated Razorpay to automate split payments and handle transactions',
        'Built matching logic to connect users sharing the same subscriptions'
      ],
      github: 'https://github.com/Aryan-Jain-2603/SubSplit',
      demo: null
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-width">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-secondary dark:text-gray-400">
            Work I'm proud of — clean, practical, and useful.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

