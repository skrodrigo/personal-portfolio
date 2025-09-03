import type { Project } from '@/app/types/interfaces'

export const projects: Project[] = [
  {
    title: 'Sintesy',
    description:
      'Sintesy ouve suas ideias, reuniões, planejamentos e cria uma linha contínua de raciocinio com anotações, tópicos, checklists e muito mais! Optimizando em 10x seus fluxos de trabalho.',
    image: '/sintesy.png',
    LandingPage: 'https://sintesy.me/',
    linkGithub: 'https://github.com/skrodrigo',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'Stripe',
      'Zod',
      'React Hook Form',
    ],
    colorBadge: 'bg-blue-500/20 text-blue-500',
  },
  {
    title: 'Nexus',
    description:
      'Uma plataforma de chat integrada com vários modelos de IA, onde o usuário pode alternar entre modelos, criar novos chats, organizar conversas e comparar respostas.',
    image: '/nexus.png',
    LandingPage: 'https://n3xus.com.br/',
    linkGithub: 'https://github.com/skrodrigo/nexus',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'Shadcn',
      'BetterAuth',
      'Prisma',
      'AI-SDK',
      'AI SDK ELEMENTS',
      'Stripe',
      'GOOGLE SSO',
      'NeonDB',
      'Zod',
      'React Hook Form',
    ],
    colorBadge: 'bg-emerald-500/20 text-emerald-500',
  },
  {
    title: 'Genesis',
    description:
      'Genesis é um SaaS de geração de interfaces Front End usando inteligência artificial.',
    image: '/genesis.png',
    linkGithub: 'https://github.com/skrodrigo/genesis',
    technologies: [
      'Next.js',
      'Prisma',
      'Shadcn',
      'BetterAuth',
      'Tailwind CSS',
      'Shadcn UI',
      'AI-SDK',
      'Stripe',
      'Resend',
      'NeonDB',
      'Nuqs',
      'Zod',
      'React Hook Form',
    ],
    colorBadge: 'bg-violet-500/20 text-violet-500',
  },
]
