"use client"
import Image from "next/image"
import Link from "next/link"
import Badge from "./Badge"
import MoveEffect from "./MoveEffect"
import { Heading3, Paragraph } from "@/components/ui"

export default function AnimatedCard({ title, description, image, technologies = [], link }: {
  title: string,
  description: string,
  image: string,
  technologies?: string[],
  link: string
}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" >
      <MoveEffect className="w-full max-w-[350px] rounded-2xl border dark:border-[#233554] overflow-hidden">
        <div className="group relative overflow-hidden rounded-lg  p-2">
          <div className="relative mb-2 aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>
          <Heading3 className="mb-1 font-semibold text-[#e6f1ff] group-hover:text-[#64ffda]">{title}</Heading3>
          <Paragraph className="mb-4 text-sm text-[#a8b2d1] line-clamp-2">{description}</Paragraph>
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          )}
        </div>
      </MoveEffect>
    </Link>
  )
}
