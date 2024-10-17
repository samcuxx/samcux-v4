import { Heading3, Paragraph } from '@/components/ui'

const experiences = [
  {
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'Klaviyo',
    period: '2024 — PRESENT',
    description: 'Build and maintain critical components used to construct accessible, responsive, and performant user interfaces. Collaborate with designers, product managers, and engineers to deliver high-quality, inclusive experiences.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Storybook'],
  },
  {
    title: 'Lead Engineer',
    company: 'Upstatement',
    period: '2018 - 2022',
    description: 'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute...',
    technologies: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Node.js'],
  },
  // Add more experiences as needed
]

const Experience = () => {
  return (
    <section id="experience" className="mb-24">
      <Heading3 className="mb-4 text-[#ccd6f6] md:hidden sticky top-0 z-10 py-2 bg-opacity-80 backdrop-filter backdrop-blur-md uppercase">Experience</Heading3>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-[#64ffda] before:rounded-full before:border-4 before:border-[#0a192f]">
            <Heading3 className="text-xl font-medium text-[#ccd6f6]">
              {exp.title} <span className="text-[#64ffda]">@ {exp.company}</span>
            </Heading3>
            <Paragraph className="text-sm mb-2">{exp.period}</Paragraph>
            <Paragraph className="mb-4">{exp.description}</Paragraph>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded bg-[#112240] text-[#64ffda]">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
