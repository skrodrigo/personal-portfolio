'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { CardTitle } from '@/components/ui/card'
import {
  ArrowTopRightIcon,
  CircleIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from './components/project-card'
import { projects } from './data/projects'
import { techs } from './data/tech'

export default function Component() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-black text-white"
    >
      <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
        <aside className="md:w-1/3 md:h-screen md:sticky top-0 md:border-r ">
          <div className="flex flex-col items-center md:justify-start md:items-start p-8 space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-40 h-40 md:w-60 md:h-60 relative z-10">
                <AvatarImage src="/perfil.png" alt="Rodrigo Carvalho" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <div className="ml-0 flex justify-center flex-col items-center md:items-start md:-ml-14">
                <CardTitle className="text-xl">Rodrigo Carvalho</CardTitle>
                <p className="text-sm text-zinc-400">Desenvolvedor Junior</p>
                <div className="flex -ml-[2px] items-center space-x-2 border font-mono p-2 my-1 bg-zinc-900 rounded-md">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-sm text-zinc-400">Open to work</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start md:-ml-[92px] ml-0 items-center md:items-start gap-2">
                <Link
                  href="https://www.linkedin.com/in/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-md border"
                >
                  <LinkedInLogoIcon className="size-5" />
                </Link>
                <Link
                  href="https://github.com/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-md border"
                >
                  <GitHubLogoIcon className="size-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/skrodrigo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 p-2 rounded-md border"
                >
                  <EnvelopeClosedIcon className="size-5" />
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
            <h2 className="text-xl font-semibold mb-4 text-white">
              Experiência
            </h2>
            <div className="space-y-4 mb-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <span className="text-zinc-400 text-xs">12/2024 - Now</span>
                <h3 className="font-medium text-zinc-100">
                  CEO & Co-Founder @ Sintesy
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Criação de landing pages otimizadas com Astro e React,
                  aumentando a taxa de conversão e melhorando o SEO.
                  <br />
                  <br />
                  Desenvolvimento completo da plataforma web com Next.js 15 (App
                  Router), TanStack Query, Nuqs, React, TailwindCSS, Context
                  API, Zod e React Hook Form, integração com APIs REST via
                  Axios.
                  <br />
                  <br />
                  Desenho de telas no Figma seguindo as heurísticas de
                  usabilidade e Design System.
                  <br />
                  <br />
                  Implementação de pipelines de CI/CD que otimizaram o tempo de
                  build e deploy na AWS.
                  <br />
                  <br />
                  Líder de iniciativas estratégicas e posicionamento,
                  contribuindo significativamente para a expansão da base de
                  usuários, impactando mais de 4.300 leads.
                  <br />
                  <br />
                  Participação de programas de aceleração de startups como o
                  SebraeLAB, e CriarCE fortalecendo a evolução do produto e do
                  negócio.
                </p>
                <div className="space-x-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Marketing</Badge>
                  <Badge variant="secondary">Liderança</Badge>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-zinc-900 pb-4 space-y-1">
                <span className="text-zinc-400 text-xs">12/2024 - 5/2025</span>
                <h3 className="font-medium text-zinc-100">
                  Artificial Intelligence with AWS @ Compass UOL
                </h3>
                <p className="text-sm text-zinc-400 max-w-2xl">
                  Desenvolvimento de chatbots inteligentes de ponta a ponta,
                  desde a concepção até a entrega em produção, atuando no
                  frontend e backend
                  <br />
                  <br />
                  Utilização de Python e Node.js, com bibliotecas como LangChain
                  para criação de fluxos conversacionais avançados, integração
                  com modelos de linguagem do AWS Bedrock e orquestração de
                  prompts dinâmicos utilizando AWS Lambda e API Gateway, com S3
                  para armazenamento
                  <br />
                  <br />
                  Criação de webservers dedicados em EC2, configurando ambientes
                  conteinerizados com Docker e Node.js, otimizando imagens para
                  reduzir tempo de build e deploy
                  <br />
                  <br />
                  Implementação, monitoramento e observabilidade em tempo real
                  com CloudWatch Logs, criando métricas e alarmes para eventos
                  críticos
                  <br />
                  <br />
                  Participação em sprints ágeis com Scrum e Kanban, conduzindo
                  daily meetings, refinamentos e entregas incrementais alinhadas
                  às demandas e prazos
                </p>
                <div className="space-x-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary">AWS</Badge>
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
            <div className="flex flex-col gap-4 justify-start">
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
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="group transition-colors flex items-center"
            >
              <h2 className="text-xl font-semibold hover:opacity-90">Blog</h2>
              <ArrowTopRightIcon className="h-3 w-3 ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.section>
        </main>
      </div>
    </motion.div>
  )
}
