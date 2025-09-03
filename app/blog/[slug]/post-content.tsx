'use client'

import ShinyCard from '@/app/components/shiny-card'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { Card, CardContent } from '@/components/ui/card'
import type { PostData } from '@/lib/posts'
import { ArrowLeftIcon, CalendarIcon, PersonIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface PostContentProps {
  post: PostData
}

export default function PostContent({ post }: PostContentProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgress className="fixed top-0 h-0.5 bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)] z-50" />
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <Link
          href="/blog"
          className="text-zinc-400 flex items-center gap-2 ml-4 mb-4"
        >
          <div className="inline-flex bg-zinc-900 items-center border rounded-full p-2 justify-center hover:text-zinc-200 group">
            <ArrowLeftIcon className="h-4 w-4" />
          </div>
        </Link>

        <ShinyCard>
          <Card className="bg-transparent border-none overflow-hidden">
            <CardContent className="p-8">
              <header className="mb-12">
                <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 mb-6">
                  <div className="flex items-center px-3 py-1 ">
                    <CalendarIcon className="h-4 w-4 mr-1.5" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center px-3 py-1 ">
                    <PersonIcon className="h-4 w-4 mr-1.5" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
                  {post.title}
                </h1>
              </header>

              <article className="prose prose-invert max-w-none">
                <div
                  // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
                  dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
                />
              </article>
            </CardContent>
          </Card>
        </ShinyCard>
      </div>
    </div>
  )
}
