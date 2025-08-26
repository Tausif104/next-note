'use client'

import { useActionState, useEffect } from 'react'
import { registerUser } from '@/app/actions/user-actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const RegistrationForm = () => {
  const initialState = {
    msg: '',
    success: false,
  }

  const [state, formAction, pending] = useActionState(
    registerUser,
    initialState
  )

  const router = useRouter()

  useEffect(() => {
    if (state.msg) {
      if (state.success === true) {
        toast.success(state.msg)
        router.push('/login')
      } else {
        toast.warning(state.msg)
      }
      state.msg = ''
    }
  }, [state.msg])

  return (
    <>
      <form action={formAction}>
        <div className='mb-4'>
          <label
            htmlFor='fname'
            className='text-left w-full flex text-gray-400 text-[13px] mb-1'
          >
            Enter Your First Name
          </label>
          <input
            required
            name='firstname'
            id='fname'
            type='text'
            placeholder='John'
            className='bg-gray-100 w-full py-2 px-3 rounded outline-none'
          />
        </div>
        <div className='mb-4'>
          <label
            htmlFor='fname'
            className='text-left w-full flex text-gray-400 text-[13px] mb-1'
          >
            Enter Your Last Name
          </label>
          <input
            required
            name='lastname'
            id='lname'
            type='text'
            placeholder='Doe'
            className='bg-gray-100 w-full py-2 px-3 rounded outline-none'
          />
        </div>
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
        <div className='mb-4'>
          <label
            htmlFor='confirmPassword'
            className='text-left w-full flex text-gray-400 text-[13px] mb-1'
          >
            Confirm Password
          </label>
          <input
            required
            name='confirmpass'
            id='confirmPassword'
            type='password'
            placeholder='Password'
            className='bg-gray-100 w-full py-2 px-3 rounded outline-none'
          />
        </div>

        <button
          type='submit'
          className='bg-green-400 text-white w-full rounded py-2 inline-block font-semibold cursor-pointer hover:bg-black  transition duration-300'
        >
          {pending ? 'Loading' : 'Register'}
        </button>
      </form>
    </>
  )
}

export default RegistrationForm
