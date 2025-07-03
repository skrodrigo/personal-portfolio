import { getPostData, getAllPostSlugs, PostData } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import ShinyCard from '@/app/components/shiny-card'
import { ArrowLeftIcon, CalendarIcon, PersonIcon } from '@radix-ui/react-icons'
import { Metadata, ResolvingMetadata } from 'next'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths.map(path => ({ slug: path.params.slug }))
}

export async function generateMetadata(
  { params }: PostPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostData(params.slug)

  if (!post) {
    return {
      title: 'Post Não Encontrado',
    }
  }

  return {
    title: `${post.title} | Blog Rodrigo Carvalho`,
    description: post.summary,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-zinc-400 flex items-center gap-2 ml-4">
          <div className='inline-flex items-center border rounded-full p-2 justify-center hover:text-zinc-200  group'>
            <ArrowLeftIcon className="h-4 w-4" />
          </div>
          voltar
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
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }} />
              </article>
            </CardContent>
          </Card>
        </ShinyCard>
      </div>
    </div>
  )
}
