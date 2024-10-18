import { Heading3, Paragraph } from '@/components/ui'
import Badge from '@/components/ui/Badge'
import MoveEffect from '@/components/ui/MoveEffect'
import Link from 'next/link'
import { experiences } from '@/data'

interface ExperienceType {
  link: string;
  period: string;
  title: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  return (
    <section id="experience" className="mb-24">
      <Heading3 className="mb-4 text-[#ccd6f6] md:hidden sticky top-0 z-10 py-3 bg-opacity-80 backdrop-filter backdrop-blur-md uppercase">Experience</Heading3>
      <div className="space-y-8">
        {experiences.map((exp: ExperienceType, index: number) => (
          <MoveEffect 
            key={index} 
            className="block overflow-hidden"
            scale={1.02}
            gradientColor="rgba(255,255,255,0.15)"
            gradientSize="60%"
            transitionDuration={400}
            springConfig={{ stiffness: 300, damping: 20 }}
          >
            <Link href={exp.link} className="block group">
              <div className="flex flex-col md:flex-row md:items-start border border-[#233554] py-6 px-4 transition-all duration-300 hover:bg-[#112240] rounded-lg">
                <div className="w-full md:w-1/4 mb-2 md:mb-0 md:pr-4">
                  <p className="text-xs pt-1 text-[#8892b0] whitespace-nowrap">{exp.period}</p>
                </div>
                <div className="w-full md:w-3/4">
                  <Heading3 className="text-xl font-medium text-[#ccd6f6] mb-1 group-hover:text-[#64ffda]">
                    {exp.title} 
                  </Heading3>
                  <Paragraph className="mb-4 text-sm text-[#8892b0]">{exp.description}</Paragraph>
                  <div className="flex flex-wrap gap-2 mt-1 md:mt-2">
                    {exp.technologies.map((tech: string, i: number) => (
                      <Badge key={i}>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </MoveEffect>
        ))}
      </div>
    </section>
  )
}

export default Experience
