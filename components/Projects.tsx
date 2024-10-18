import { Heading3 } from '@/components/ui'
import AnimatedCard from '@/components/ui/AnimatedCard'
import { projects } from '@/data/Projects'

const Projects = () => {
  return (
    <section id="projects" className="mb-12">
    <Heading3 className="mb-4 text-[#ccd6f6] md:hidden sticky top-0 z-10 py-3 bg-opacity-80 backdrop-filter backdrop-blur-md uppercase">Projects</Heading3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies || []}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects
