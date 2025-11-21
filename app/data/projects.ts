import type { Project } from '@/app/types/interfaces'

export const projects: Project[] = [
  {
    title: 'Sintesy',
    description:
      'Sintesy listens to your ideas, meetings, planning sessions and creates a continuous line of reasoning with notes, topics, checklists and much more! Optimizing your workflows by 10x.',
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
      'A chat platform integrated with multiple AI models, where users can switch between models, create new chats, organize conversations and compare responses.',
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
      'Genesis is a SaaS for generating Front End interfaces using artificial intelligence.',
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
