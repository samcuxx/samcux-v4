import { Heading3, Paragraph } from '@/components/ui'

const About = () => {
  return (
    <section id="about" className="mb-24">
      <Heading3 className="mb-4 text-[#ccd6f6] md:hidden sticky top-0 z-10 py-2 bg-opacity-80 backdrop-filter backdrop-blur-md uppercase">About</Heading3>
      <div className="space-y-4">
        <Paragraph>
          Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I&apos;ve had the privilege of building software for an <span className="text-[#64ffda]">advertising agency</span>, a <span className="text-[#64ffda]">start-up</span>, a <span className="text-[#64ffda]">huge corporation</span>, and a <span className="text-[#64ffda]">digital product studio</span>.
        </Paragraph>
        <Paragraph>
          My main focus these days is building accessible user interfaces for our customers at <span className="text-[#64ffda]">Klaviyo</span>. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
        </Paragraph>
        <Paragraph>
          When I&apos;m not at the computer, I&apos;m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for <span className="text-[#64ffda]">Korok seeds</span>.
        </Paragraph>
      </div>
    </section>
  )
}

export default About
