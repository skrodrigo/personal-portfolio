import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { IconBrandFigma, IconBrandGithub } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Project } from '../types/interfaces'
import ShinyCard from './shiny-card'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <ShinyCard className="group h-full max-w-96">
      <Card className="bg-zinc-950 border border-zinc-900 hover:border-zinc-500 overflow-hidden h-full flex flex-col max-w-96">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            quality={100}
            priority
            layout="fill"
            objectFit="cover"
            className="rounded-t-none"
          />
        </div>
        <CardContent className="p-4 flex-grow flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-medium text-lg text-zinc-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <Badge
                key={tech}
                variant="secondary"
                className={project.colorBadge}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex pt-2 pl-4 gap-2 justify-start">
          {project?.LandingPage && (
            <div className="flex justify-center items-center bg-white text-black px-3 py-1 text-xs rounded-none font-semibold">
              <Link
                href={project?.LandingPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
              >
                Landing Page
              </Link>
            </div>
          )}
          {project?.Dashboard && (
            <div className="flex justify-center items-center bg-white text-black px-3 py-1 text-xs rounded-none font-semibold">
              <Link
                href={project?.Dashboard}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Dashboard
              </Link>
            </div>
          )}
          {project?.linkGithub && (
            <div className="flex justify-center items-center bg-white text-black px-3 py-1 text-xs rounded-none font-semibold">
              <IconBrandGithub className="h-4 w-4 mr-2" />
              <Link
                href={project?.linkGithub}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Github
              </Link>
            </div>
          )}
          {project?.linkFigma && (
            <div className="flex justify-center items-center bg-white text-black px-3 py-1 text-xs rounded-none font-semibold">
              <IconBrandFigma className="h-4 w-4 mr-2" />
              <Link
                href={project?.linkFigma}
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Figma
              </Link>
            </div>
          )}
        </CardFooter>
      </Card>
    </ShinyCard>
  )
}
