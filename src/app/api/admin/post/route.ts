import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const auth = req.headers.get('authorization')
  const validAuth = 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_ADMIN_USERNAME}:${process.env.NEXT_PUBLIC_ADMIN_PASSWORD}`).toString('base64')

  if (auth !== validAuth) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { title, slug, description, content } = await req.json()

  const frontMatter = `---
title: "${title}"
date: "${new Date().toISOString()}"
slug: "${slug}"
description: "${description}"
---

${content}
`

  const postsDir = path.join(process.cwd(), 'content', 'posts')
  const filePath = path.join(postsDir, `${slug}.md`)

  try {
    fs.writeFileSync(filePath, frontMatter)
    return NextResponse.json({ message: 'Post created' })
  } catch (err) {
    console.error(err)
    return new NextResponse('Error writing file', { status: 500 })
  }
}
