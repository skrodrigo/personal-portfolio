'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Project {
  title: string
  description: string
  image: string
}

// const projects: Project[] = [
//   {
//     title: 'nextjs starter kit',
//     description:
//       'construa seu saas com as melhores tecnologias para velocidade e escalabilidade.',
//     image: '/cariri.png',
//   },
//   {
//     title: 'tsafi.xyz',
//     description:
//       'um construtor de sites de blog de IA de código aberto e CMS construído com Nextjs, Supabase e TipTap. lance um blog em minutos',
//     image: '/cariri.png',
//   },
//   {
//     title: 'renderização de blog em html',
//     description:
//       'criei meu próprio padrão que me permite renderizar artigos de blog usando html (não gosto de markdown!).',
//     image: '/cariri.png',
//   },
// ]

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
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ShinyCard className="group h-80">
        <Card className="bg-zinc-950 border border-zinc-900 hover:border-zinc-500 overflow-hidden h-full flex flex-col">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-4 flex-grow flex flex-col justify-between">
            <h3 className="font-medium text-lg text-zinc-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400">{project.description}</p>
          </CardContent>
        </Card>
      </ShinyCard>
    </motion.div>
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
      className="min-h-screen bg-black text-white p-4 md:p-8"
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
                <Mail className="h-5 w-5 text-zinc-400 hover:text-white transition-colors " />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://github.com/skrodrigo" target="_blank">
                <Github className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://linkedin.com/in/skrodrigo" target="_blank">
                <Linkedin className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
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
            </div>
          </motion.section>
          {/* <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          </motion.section> */}
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
