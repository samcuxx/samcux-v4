import React, { useEffect } from 'react';

interface ActiveSectionObserverProps {
  children: React.ReactNode;
  onActiveChange: (active: string) => void;
}

const ActiveSectionObserver: React.FC<ActiveSectionObserverProps> = ({ children, onActiveChange }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onActiveChange(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [onActiveChange]);

  return <>{children}</>;
};

export default ActiveSectionObserver;
