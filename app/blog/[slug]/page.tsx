import { getAllPostSlugs, getPostData } from '@/lib/posts'
import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import PostContent from './post-content'

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

  return <PostContent post={post} />
}
