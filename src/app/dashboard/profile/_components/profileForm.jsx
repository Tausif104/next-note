'use client'

import { updateProfile } from '@/app/actions/user-actions'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

const ProfileForm = () => {
  const initialState = {
    msg: '',
    success: false,
  }

  const [state, formAction, pending] = useActionState(
    updateProfile,
    initialState
  )

  const router = useRouter()

  useEffect(() => {
    if (state.msg && state.success) {
      toast.success(state.msg)
      router.push('/dashboard/profile')
      state.msg = ''
    }
  }, [state.msg, router])

  return (
    <>
      <form action={formAction}>
        <div className='grid grid-cols-3 gap-3'>
          <div>
            <label
              className='text-left w-full flex text-gray-400 text-[13px] mb-1'
              htmlFor='fathersname'
            >
              Fathers Name
            </label>
            <input
              type='text'
              id='fathersname'
              name='fathersname'
              placeholder='John Doe'
              className='bg-white border border-gray-200 w-full py-2 px-3 rounded outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='mothersname'
              className='text-left w-full flex text-gray-400 text-[13px] mb-1'
            >
              Mothers Name
            </label>
            <input
              type='text'
              id='mothersname'
              name='mothersname'
              placeholder='Jane'
              className='bg-white border border-gray-200 w-full py-2 px-3 rounded outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='text-left w-full flex text-gray-400 text-[13px] mb-1'
            >
              Phone
            </label>
            <input
              type='text'
              id='phone'
              name='phone'
              placeholder='Phone'
              className='bg-white border border-gray-200 w-full py-2 px-3 rounded outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='address'
              className='text-left w-full flex text-gray-400 text-[13px] mb-1'
            >
              Address
            </label>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Address'
              className='bg-white border border-gray-200 w-full py-2 px-3 rounded outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='hobby'
              className='text-left w-full flex text-gray-400 text-[13px] mb-1'
            >
              Hobby
            </label>
            <input
              type='text'
              id='hobby'
              name='hobby'
              placeholder='Traveling'
              className='bg-white border border-gray-200 w-full py-2 px-3 rounded outline-none'
            />
          </div>
          <div>
            <label
              htmlFor='profession'
              className='text-left w-full flex text-gray-400 text-[13px] mb-1'
            >
              Profession
            </label>
            <input
              type='text'
              id='profession'
              name='profession'
              placeholder='Software Engineer'
              className='bg-white border border-gray-200 w-full py-2 px-3 rounded outline-none'
            />
          </div>
        </div>
        <button
          type='submit'
          className='mt-4 rounded-md px-7 py-3 cursor-pointer bg-black text-white'
        >
          {pending ? 'Updating' : 'Update'}
        </button>
      </form>
    </>
  )
}

export default ProfileForm
