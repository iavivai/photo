import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

function getPostData(postId) {
  const fullPath = path.join(postsDirectory, `${postId}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    postId,
    ...matterResult.data
  }
}

export default function handler(req, res) {
  const {
    query: { id },
  } = req

  const postData = getPostData(id)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ ...postData }))
}
