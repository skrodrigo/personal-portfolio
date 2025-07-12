export interface Tech {
  title: string
  description: string
  image: string
}

export interface Project {
  title: string
  description: string
  image: string
  LandingPage?: string | null
  Dashboard?: string | null
  linkGithub: string
  technologies: string[]
  colorBadge: string
}
