import { Paragraph } from '@/components/ui'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 mt-12">
      <div className="max-w-4xl mx-auto px-4 text-center text-gray-400 text-sm">
        <Paragraph>Designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.</Paragraph>
        <Paragraph className="mt-2">© 2024 Samuel Amoah. All rights reserved.</Paragraph>
      </div>
    </footer>
  )
}

export default Footer
