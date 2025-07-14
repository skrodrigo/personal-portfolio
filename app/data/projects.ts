import type { Project } from '@/app/types/interfaces'

export const projects: Project[] = [
  {
    title: 'Sintesy',
    description:
      'Sintesy ouve suas ideias, reuniões, planejamentos e cria uma linha contínua de raciocinio com anotações, tópicos, checklists e muito mais! Optimizando em 10x seus fluxos de trabalho.',
    image: '/sintesy.png',
    LandingPage: 'https://sintesy.me/',
    linkGithub: 'https://github.com/skrodrigo',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    colorBadge: 'bg-blue-500/20 text-blue-500',
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
    ],
    colorBadge: 'bg-violet-500/20 text-violet-500',
  },
  {
    title: 'Receitai',
    description:
      'receitai é um SaaS de receitas desbloquadas por créditos e também gera receitas com AI.',
    image: '/recipeai.png',
    LandingPage: 'https://receitai.vercel.app/',
    linkGithub: 'https://github.com/skrodrigo/receitai-microsaas-nextjs',
    technologies: [
      'Next.js',
      'Prisma',
      'Shadcn',
      'BetterAuth',
      'Tailwind CSS',
      'Shadcn UI',
      'NeonDB',
      'Cakto Pay',
    ],
    colorBadge: 'bg-stone-400/20 text-stone-100',
  },
]
