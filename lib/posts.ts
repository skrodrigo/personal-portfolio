import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), '_posts')

export interface PostData {
  slug: string
  title: string
  date: string
  author: string
  summary: string
  tags: string[]
  contentHtml?: string
}

export function getSortedPostsData(): PostData[] {
  let fileNames: string[] = []
  try {
    fileNames = fs.readdirSync(postsDirectory)
  } catch (err) {
    console.warn(
      'No _posts directory found or it is empty. Blog will be empty.'
    )
    return []
  }

  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')

      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        ...(matterResult.data as {
          title: string
          date: string
          author: string
          summary: string
          tags: string[]
        }),
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }
    return -1
  })
}

export function getAllPostSlugs() {
  let fileNames: string[] = []
  try {
    fileNames = fs.readdirSync(postsDirectory)
  } catch (err) {
    return []
  }
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      }
    })
}

export async function getPostData(slug: string): Promise<PostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      contentHtml,
      ...(matterResult.data as {
        title: string
        date: string
        author: string
        summary: string
        tags: string[]
      }),
    }
  } catch (error) {
    console.error(`Error fetching post data for slug "${slug}":`, error)
    return null
  }
}
