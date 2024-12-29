import axios from 'axios'
import { type Post } from '../models/post'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export async function getPosts() {
  const res = await axios.get<Post[]>(ROOT_URL + '/posts')

  const posts = []

  for (const [key, post] of Object.entries(res.data)) {
    posts.push(post)
  }

  return posts
}

export async function getPost(id: String | undefined) {
  if (id) {
    const url = `${ROOT_URL}/posts/${id}`

    return await axios.get<Post>(url)
  }

  return undefined
}

export async function updatePost(id: string, title: String, body: String, selected: String) {
  const res = await axios({
    method: 'patch',
    url: `${ROOT_URL}/posts/${id}`,
    data: {
      userId: selected,
      title: title,
      body: body
    }
  })

  return res.status
}

export async function deletePost(post: Post) {
  return true
}

export async function createPost(post: Post) {
  return true
}

export async function getUserPosts(userId: String | undefined) {
  const posts = await axios.get<Post[]>(ROOT_URL + '/posts')

  const userPosts = []

  for (const [key, post] of Object.entries(posts.data)) {
    if (String(post.userId) === userId) {
      userPosts.push(post)
    }
  }

  return userPosts
}

export async function getComments(id: String | undefined) {
  if (id) {
    const url = `${ROOT_URL}/posts/${id}/comments`

    return await axios.get<Comment[]>(url)
  }

  return undefined
}
