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
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0a192f] text-[#8892b0] px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 max-w-[1320px] mx-auto">
      <div className="md:w-[50%] md:h-screen overflow-y-auto hide-scrollbar py-8 md:py-16 pr-4 md:pr-8">
        <Header activeSection={activeSection} />
      </div>
      <div className="md:w-[50%]">
        <main className="max-w-3xl mx-auto py-16 md:py-24 md:h-screen md:overflow-y-auto hide-scrollbar px-3 md:px-3" >
          <ActiveSectionObserver onActiveChange={setActiveSection}>
            {children}
          </ActiveSectionObserver>
        </main>
      </div>
    </div>
  );
};

export default HomeWrapper;
