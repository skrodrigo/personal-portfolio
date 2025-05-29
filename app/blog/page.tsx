import Link from 'next/link'
import { getSortedPostsData, PostData } from '@/lib/posts'
import { Badge } from '@/components/ui/badge'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import ShinyCard from '@/app/components/shiny-card'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function BlogIndexPage() {
  const allPosts = getSortedPostsData()

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-zinc-400 border rounded-full p-2 justify-center hover:text-zinc-200 mb-8 group">
          <ArrowLeftIcon className="h-4 w-4" />
        </Link>

        <h1 className="text-4xl font-bold mb-10 text-zinc-100">Blog</h1>

        {allPosts.length === 0 && (
          <p className="text-zinc-400">Nenhum post encontrado ainda. Volte em breve!</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map(({ slug, date, title, summary, tags }) => (
            <ShinyCard key={slug} className="group h-full">
              <Card className="bg-zinc-950 border border-zinc-900 hover:border-zinc-500 overflow-hidden h-full flex flex-col">
                <CardContent className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <time dateTime={date} className="text-sm text-zinc-500 mb-2 block">
                      {new Date(date).toLocaleDateString('pt-BR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <h2 className="text-xl font-semibold text-zinc-100 mb-3">
                      <Link href={`/blog/${slug}`}>{title}</Link>
                    </h2>
                    <p className="text-sm text-zinc-400 line-clamp-3">
                      {summary}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ShinyCard>
          ))}
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Blog | Rodrigo Carvalho',
  description: 'Artigos e pensamentos sobre desenvolvimento web, tecnologia e carreira.',
}
