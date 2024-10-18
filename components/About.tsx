import { Heading3, Paragraph } from '@/components/ui'
import { aboutMe } from '@/data'
import Resume from '@/components/ui/Resume'

const About = () => {
  return (
    <section id="about" className="mb-24">
      <Heading3 className="mb-4 text-[#ccd6f6] md:hidden sticky top-0 z-10 py-3 bg-opacity-80 backdrop-filter backdrop-blur-md uppercase">About</Heading3>
      <div className="space-y-4">
        {aboutMe.paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>
            {paragraph.text.split(/<highlight>|<\/highlight>/).map((part, i) => 
              i % 2 === 0 ? part : <span key={i} className="text-[#64ffda]">{part}</span>
            )}
          </Paragraph>
        ))}
      </div>
       <Resume />
    </section>
  )
}

export default About
