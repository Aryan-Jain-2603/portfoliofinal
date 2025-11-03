import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-width px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-semibold hover:text-accent transition-colors"
          aria-label="Home"
        >
          Aryan Jain
        </button>
        
        <ul className="hidden md:flex items-center gap-8">
          {['about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium text-secondary dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors capitalize"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-all duration-300"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-secondary hover:text-accent"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;

