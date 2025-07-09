import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)

  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title,
      date: data.date,
      slug: data.slug || fileName.replace(/\.md$/, ''),
      description: data.description || '',
      content
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}


export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`)

  try {
    await fs.promises.access(filePath)
  } catch {
    return null
  }

  const fileContents = await fs.promises.readFile(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title,
    date: data.date,
    slug,
    description: data.description || '',
    content
  }
}


export interface Post {
  title: string
  date: string
  slug: string
  description?: string
  content: string
}
