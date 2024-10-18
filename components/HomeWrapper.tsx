"use client";

import { useState } from "react";
import Header from "./Header";
import ActiveSectionObserver from './ActiveSectionObserver';

interface HomeWrapperProps {
  children: React.ReactNode;
}

const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a192f] text-[#8892b0] md:mx-16 lg:mx-32">
      <div className="md:w-[50%] md:h-screen overflow-y-auto hide-scrollbar p-8 md:p-16">
        <Header activeSection={activeSection} />
      </div>
      <div className="md:w-[50%]">
        <main className="max-w-3xl mx-auto px-8 py-16 md:py-24 md:h-screen md:overflow-y-auto hide-scrollbar">
          <ActiveSectionObserver onActiveChange={setActiveSection}>
            {children}
          </ActiveSectionObserver>
        </main>
      </div>
    </div>
  );
};

export default HomeWrapper;
