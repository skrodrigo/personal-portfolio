'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Project {
  title: string
  description: string
  image: string
  linkWeb: string
  linkGithub: string
}

interface Tech {
  title: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Cariri Tips',
    description:
      'A Cariri Tips é uma iniciativa grátis que ajuda você a maximizar seus lucros com apostas em futebol. ',
    image: '/cariri.png',
    linkWeb: 'https://cariritips.com.br',
    linkGithub: 'https://github.com/skrodrigo/cariritips.com.br',
  },
]

const techs: Tech[] = [
  {
    title: 'Next.js',
    description:
      'O Next.js é um framework de React que permite renderização do lado do servidor.',
    image: 'https://skillicons.dev/icons?i=next',
  },
  {
    title: 'React',
    description:
      'O React é uma biblioteca JavaScript para criar interfaces de usuário.',
    image: 'https://skillicons.dev/icons?i=react',
  },
  {
    title: 'Tailwind CSS',
    description:
      'O Tailwind CSS é um framework CSS que permite criar estilos rapidamente.',
    image: 'https://skillicons.dev/icons?i=tailwind',
  },
  {
    title: 'Node.js',
    description:
      'O Node.js é um ambiente de execução JavaScript que permite rodar JavaScript no servidor.',
    image: 'https://skillicons.dev/icons?i=nodejs',
  },
  {
    title: 'TypeScript',
    description:
      'O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao código.',
    image: 'https://skillicons.dev/icons?i=ts',
  },
  {
    title: 'PostgreSQL',
    description:
      'O PostgreSQL é um sistema de gerenciamento de banco de dados relacional.',
    image: 'https://skillicons.dev/icons?i=postgres',
  },
  {
    title: 'Docker',
    description:
      'O Docker é uma plataforma de software que permite criar, testar e implantar aplicativos rapidamente.',
    image: 'https://skillicons.dev/icons?i=docker',
  },
]

function ShinyCard({
  children,
  className = '',
}: { children: React.ReactNode; className?: string }) {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
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
            className="rounded-t-xl"
          />
        </div>
        <CardContent className="p-4 flex-grow flex flex-col justify-between">
          <h3 className="font-medium text-lg text-zinc-100 mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400">{project.description}</p>
        </CardContent>
        <CardFooter className="flex pt-2 pl-4 gap-2 justify-start">
          <div className="flex justify-center items-center bg-white text-black px-3 py-1 text-xs rounded-md font-semibold">
            <GlobeIcon className="h-4 w-4 mr-2" />
            <Link
              href={project.linkWeb}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Website
            </Link>
          </div>
          <div className="flex justify-center items-center bg-white text-black px-3 py-1 text-xs rounded-md font-semibold">
            <GitHubLogoIcon className="h-4 w-4 mr-2" />
            <Link
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              Github
            </Link>
          </div>
        </CardFooter>
      </Card>
    </ShinyCard>
  )
}

export default function Component() {
  const [ripple, setRipple] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setRipple(prev => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-black text-white p-4 md:p-8 "
    >
      <Card className="bg-black text-white border border-zinc-900 shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-900 pb-4 gap-4">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="w-20 h-20 relative z-10">
                <AvatarImage src="/perfil.png" alt="Rodrigo Carvalho" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <AnimatePresence>
                {ripple && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    className="absolute inset-0 bg-blue-500 rounded-full"
                  />
                )}
              </AnimatePresence>
            </div>
            <div>
              <CardTitle className="text-xl">Rodrigo Carvalho</CardTitle>
              <p className="text-sm text-zinc-400">Desenvolvedor Front End</p>
            </div>
          </div>
          <div className="sm:space-x-3 gap-3 sm:gap-0 flex flex-col sm:flex-row items-start justify-start">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://gmail.com" target="_blank">
                <EnvelopeClosedIcon className="h-5 w-5 text-zinc-400 hover:text-white transition-colors " />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://github.com/skrodrigo" target="_blank">
                <GitHubLogoIcon className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://linkedin.com/in/skrodrigo" target="_blank">
                <LinkedInLogoIcon className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
              </Link>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Formação</h2>
            <div className="space-y-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <h3 className="font-medium text-zinc-100">
                  Bacharel em Sistemas de Informação
                </h3>
                <p className="text-sm text-zinc-400">
                  Uninassau Juazeiro do Norte (2023 - 2026)
                </p>
              </div>
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <h3 className="font-medium text-zinc-100">
                  Técnico em Informática
                </h3>
                <p className="text-sm text-zinc-400">
                  EEEP Antonia Nedina Onofre de Paiva (2020 - 2022)
                </p>
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Stack</h2>
            <div className="space-y-4">
              <div className="flex justify-start items-center border-b border-zinc-900 pb-4 gap-2 ">
                {techs.map(tech => (
                  <img
                    src={tech.image}
                    alt={tech.title}
                    key={tech.title}
                    className="h-14 w-14 grayscale hover:grayscale-0  duration-500"
                  />
                ))}
              </div>
            </div>
          </motion.section>
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 gap-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-2">Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <ShinyCard className="group h-full">
                <Card className="bg-zinc-950 border border-zinc-900 hover:border-zinc-500 transition-colors h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <h3 className="font-medium mb-2 text-zinc-100">
                      Criação de Interfaces Modernas
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Desenvolvimento de interfaces intuitivas e responsivas
                      para seu site ou aplicativo, garantindo uma experiência de
                      usuário excelente.
                    </p>
                  </CardContent>
                </Card>
              </ShinyCard>

              <ShinyCard className="group h-full">
                <Card className="bg-zinc-950 border border-zinc-900 hover:border-zinc-500 transition-colors h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <h3 className="font-medium mb-2 text-zinc-100">
                      Consultoria em UX/UI
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Obtenha orientação sobre boas práticas de design e
                      estratégias para melhorar a experiência e usabilidade dos
                      seus projetos.
                    </p>
                  </CardContent>
                </Card>
              </ShinyCard>

              <ShinyCard className="group h-full w-full md:col-span-2">
                <Card className="bg-zinc-950 border border-zinc-900 hover:border-zinc-500 transition-colors h-full">
                  <CardContent className="p-4 h-full flex flex-col justify-between">
                    <h3 className="font-medium mb-2 text-zinc-100">
                      Desenvolvimento Full Stack
                    </h3>
                    <p className="text-sm text-zinc-400">
                      Construo aplicações completas, desde o back-end ao
                      front-end, prontas para escalar e atender às necessidades
                      do seu negócio.
                    </p>
                  </CardContent>
                </Card>
              </ShinyCard>
            </div>
          </motion.section>
        </CardContent>
      </Card>
    </motion.div>
  )
}
