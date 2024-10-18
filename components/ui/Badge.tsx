// reusable   <span key={i} className="text-xs px-2 py-1 rounded bg-[#112240] text-[#64ffda]">{tech}</span>

import React from 'react'

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return <span className={`text-[#64ffda] text-xs px-2 py-1 rounded-full bg-[#112240] ${className}`}>{children}</span>;
};

export default Badge;
