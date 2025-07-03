import { Project } from "@/app/types/interfaces";

export const projects: Project[] = [
  {
    title: 'Sintesy',
    description:
      'Sintesy ouve suas ideias, reuniões, planejamentos e cria uma linha contínua de raciocinio com anotações, tópicos, checklists e muito mais! Optimizando em 10x seus fluxos de trabalho.',
    image: '/sintesy.png',
    LandingPage: 'https://sintesy.me/',
    Dashboard: 'https://dashboard.sintesy.me/',
    linkGithub: 'https://github.com/skrodrigo',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Genesis',
    description:
      'Genesis é um SaaS de geração de interfaces Front End usando inteligência artificial.',
    image: '/genesis.png',
    linkGithub: 'https://github.com/skrodrigo/genesis',
    technologies: ['Next.js', 'Prisma', 'Shadcn', 'BetterAuth', 'Tailwind CSS', 'Shadcn UI'],
  },
]