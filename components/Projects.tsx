import Image from 'next/image'
import { Heading3, Paragraph } from '@/components/ui'
import { projects } from '@/data'

const Projects = () => {
  return (
    <section id="projects" className="mb-12">
      <Heading3 className="mb-4 text-[#ccd6f6] md:hidden sticky top-0 z-10 py-3 bg-opacity-80 backdrop-filter backdrop-blur-md uppercase">
        Featured Projects
      </Heading3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <Heading3 className="mb-2">{project.title}</Heading3>
              <Paragraph className="text-gray-300 text-sm mb-4">
                {project.description}
              </Paragraph>
              <a
                href={project.link}
                className="text-light-blue hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects
