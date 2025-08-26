'use client'

import { loginUser } from '@/app/actions/user-actions'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

const LoginForm = () => {
  const initialState = {
    msg: '',
    success: false,
  }

  const [state, formAction, pending] = useActionState(loginUser, initialState)

  useEffect(() => {
    if (state?.msg) {
      toast.warning(state.msg)
      state.msg = ''
    }
  }, [state?.msg])

  return (
    <form action={formAction}>
      <div className='mb-4'>
        <label
          htmlFor='email'
          className='text-left w-full flex text-gray-400 text-[13px] mb-1'
        >
          Enter Your Email
        </label>
        <input
          required
          name='email'
          id='email'
          type='email'
          placeholder='example@gmail.com'
          className='bg-gray-100 w-full py-2 px-3 rounded outline-none'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='text-left w-full flex text-gray-400 text-[13px] mb-1'
        >
          Enter Your Password
        </label>
        <input
          required
          name='password'
          id='password'
          type='password'
          placeholder='Password'
          className='bg-gray-100 w-full py-2 px-3 rounded outline-none'
        />
      </div>

      <button
        type='submit'
        className='bg-green-400 text-white w-full rounded py-2 inline-block font-semibold cursor-pointer hover:bg-black  transition duration-300'
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
