'use client'

import { createPost } from '@/app/actions/post-actions'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const CreatePost = () => {
  const router = useRouter()

  const initialState = {
    msg: '',
    success: false,
  }

  const [state, formAction, pending] = useActionState(createPost, initialState)

  useEffect(() => {
    if (state.msg) {
      router.refresh()
      toast.success(state.msg)
      state.msg = ''
    }
  }, [state.msg])

  return (
    <>
      Create Post
      <form action={formAction}>
        <input required type='text' name='title' placeholder='Title' />
        <input required type='text' name='body' placeholder='Body' />
        <input type='submit' value='submit' className='cursor-pointer' />
      </form>
    </>
  )
}

export default CreatePost
