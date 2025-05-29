'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  GlobeIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Project {
  title: string
  description: string
  image: string
  linkWeb: string
  linkGithub: string
  technologies: string[]
}

interface Tech {
  title: string
  description: string
  image: string
}

const projects: Project[] = [
  {
    title: 'Sintesy',
    description:
      'Sintesy ouve suas ideias, reuniões, planejamentos e cria uma linha contínua de raciocinio com anotações, tópicos, checklists e muito mais! Optimizando em 10x seus fluxos de trabalho.',
    image: '/sintesy.png',
    linkWeb: 'https://dashboard.sintesy.me/',
    linkGithub: 'https://github.com/skrodrigo',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
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
    title: 'Node.js',
    description:
      'O Node.js é um ambiente de execução JavaScript que permite rodar JavaScript no servidor.',
    image: 'https://skillicons.dev/icons?i=nodejs',
  },
  {
    title: 'Python',
    description:
      '',
    image: 'https://skillicons.dev/icons?i=python',
  },
  {
    title: 'TypeScript',
    description:
      'O TypeScript é um superconjunto de JavaScript que adiciona tipagem estática ao código.',
    image: 'https://skillicons.dev/icons?i=ts',
  },
  {
    title: 'Go',
    description:
      'O Go é uma linguagem de programação de alto desempenho e baixo nível.',
    image: 'https://skillicons.dev/icons?i=go',
  },
  {
    title: 'Prisma',
    description:
      'O PostgreSQL é um sistema de gerenciamento de banco de dados relacional.',
    image: 'https://skillicons.dev/icons?i=prisma',
  },
  {
    title: 'AWS',
    description:
      'O Docker é uma plataforma de software que permite criar, testar e implantar aplicativos rapidamente.',
    image: 'https://skillicons.dev/icons?i=aws',
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
        <CardContent className="p-4 flex-grow flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-medium text-lg text-zinc-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className='bg-blue-500/20 text-blue-500'>
                {tech}
              </Badge>
            ))}
          </div>
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
  const [, setRipple] = useState(false)

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
      className="min-h-screen bg-black text-white"
    >
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-1/3 md:h-screen md:sticky top-0">
          <div className="flex flex-col items-center md:justify-start md:items-start p-8 space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-40 h-40 md:w-60 md:h-60 relative z-10">
                <AvatarImage src="/perfil.png" alt="Rodrigo Carvalho" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <div className='ml-0 flex justify-center flex-col items-center md:items-start md:-ml-14'>
                <CardTitle className="text-xl">Rodrigo Carvalho</CardTitle>
                <p className="text-sm text-zinc-400">Desenvolvedor Junior</p>
              </div>
              <div className='flex justify-center md:justify-start md:-ml-[132px] ml-0 items-center md:items-start '>
                <Link href="https://www.linkedin.com/in/skrodrigo" target="_blank" rel="noopener noreferrer">
                  <LinkedInLogoIcon className="h-5 w-5 mr-2" />
                </Link>
                <Link href="https://github.com/skrodrigo" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="h-5 w-5 mr-2" />
                </Link>
                <Link href="https://www.instagram.com/skrodrigo" target="_blank" rel="noopener noreferrer">
                  <EnvelopeClosedIcon className="h-5 w-5 mr-2" />
                </Link>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-8 space-y-8 overflow-y-auto">
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
            <h2 className="text-xl font-semibold mb-4 text-white">Experiência</h2>
            <div className="space-y-4 mb-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <span className='text-zinc-400 text-xs'>12/2024 - Now</span>
                <h3 className="font-medium text-zinc-100">
                  CTO & Co-Founder @ Sintesy
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Sintesy, um aplicativo capaz de transcrever e resumir: aulas, palestras, vídeos e criar anotações para você nunca esquecer qualquer conteúdo.
                  <br />
                  <br />
                  Responsável pelo Desenvolvimento Web da plataforma, utilizando React, Next.js, Tailwind CSS, Context API e Axios, com foco em performance, escalabilidade e experiência do usuário.
                  <br />
                  <br />
                  Além do desenvolvimento técnico, liderei iniciativas de marketing estratégico e posicionamento digital, contribuindo significativamente para a expansão da base de usuários, impactando mais de 1.500 leads com a solução. Participando também ativamente de um programa de aceleração de startups no SebraeLAB, fortalecendo a evolução do produto e do negócio.
                </p>
                <div className='space-x-2'>
                  <Badge variant='secondary'>
                    Node.js
                  </Badge>
                  <Badge variant='secondary'>
                    Python
                  </Badge>
                  <Badge variant='secondary'>
                    Marketing
                  </Badge>
                  <Badge variant='secondary'>
                    Liderança
                  </Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <span className='text-zinc-400 text-xs'>12/2024 - 5/2025</span>
                <h3 className="font-medium text-zinc-100">
                  Artificial Intelligence with AWS @ Compass UOL
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Durante meu estágio na trilha de Inteligência Artificial com AWS, desenvolvi chatbots inteligentes utilizando Python e Node.js, integrando serviços como AWS Lambda, EC2, S3, Textract, Bedrock, API Gateway e CloudWatch Logs. Estruturei arquiteturas serverless com foco em alta disponibilidade, escalabilidade automática e observabilidade em tempo real.
                  <br />
                  <br />
                  Implementei pipelines com Docker para ambientes conteinerizados, orquestrei instâncias EC2 e criei imagens otimizadas para produção. Participei ativamente de sprints ágeis com Scrum e Kanban, contribuindo em equipe para entregar soluções robustas, funcionais e alinhadas às melhores práticas de arquitetura na nuvem.
                </p>
                <div className='space-x-2'>
                  <Badge variant='secondary'>
                    Node.js
                  </Badge>
                  <Badge variant='secondary'>
                    Python
                  </Badge>
                  <Badge variant='secondary'>
                    AI/ML
                  </Badge>
                  <Badge variant='secondary'>
                    AWS
                  </Badge>
                </div>
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
              <div className="flex justify-start items-center border-b border-zinc-900 pb-4 gap-2 w-full xs:overflow-hidden overflow-scroll ">
                {techs.map(tech => (
                  <img
                    src={tech.image}
                    alt={tech.title}
                    key={tech.title}
                    className="h-12 w-12 duration-500"
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
            <div className="flex-col sm:flex-row flex gap-4">
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
        </main>
      </div>
    </motion.div>
  )
}
