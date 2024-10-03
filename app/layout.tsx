import './globals.css'
import { cn } from '@/lib/utils'
import { GeistSans } from 'geist/font'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfólio | skrodrigo',
  description: 'Portfólio pessoal de Rodrigo Carvalho.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(GeistSans.className, 'antialiased text-white bg-black')}
      >
        {children}
      </body>
    </html>
  )
}
