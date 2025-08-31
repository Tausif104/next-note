'use server'

import { revalidatePath } from 'next/cache'
import { Post } from '@/models/post-model'
import { User } from '@/models/user-model'
import { auth } from '@/auth'

// get all posts
export const getAllPosts = async () => {
  const posts = await Post.find({})
  return {
    posts,
  }
}

// create a post
export const createPost = async (prevState, formData) => {
  const { title, body } = Object.fromEntries(formData)

  const session = await auth()

  const loggedInUser = await User.findOne({ email: session?.user?.email })

  const data = {
    title,
    body,
    author: loggedInUser.id,
  }

  const newPost = await Post.create(data)

  revalidatePath('/dashboard/posts')

  if (newPost.id) {
    return {
      msg: 'Post Created',
      success: true,
    }
  }
}
