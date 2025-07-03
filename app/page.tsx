'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  CardTitle
} from '@/components/ui/card'
import {
  ArrowTopRightIcon,
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
                  CEO & Co-Founder @ Sintesy
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
          <motion.section
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/blog" className="group transition-colors flex items-center">
              <h2 className="text-xl font-semibold hover:opacity-90">Blog</h2>
              <ArrowTopRightIcon className="h-3 w-3 ml-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.section>
        </main>
      </div>
    </motion.div>
  )
}
