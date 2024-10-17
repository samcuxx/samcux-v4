// resume download link component

import Link from 'next/link'
import React from 'react'

const Resume = () => {
  return (
    <div className='my-10'>
      {/* link with arrow link icon */}
      <Link href="/resume.pdf" className='text-white font-bold flex items-center gap-2 hover:text-[#64ffda] transition-colors duration-300' download>
        <div>View Full Resume</div>
        <div className="transform transition-transform duration-300 hover:rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </Link>
    </div>
  )
}

export default Resume
