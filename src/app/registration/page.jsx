import { UserPlus2Icon } from 'lucide-react'
import Link from 'next/link'

const RegistrationPage = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='container max-w-[450px] shadow-xl bg-whiteshadow-lg p-7 rounded-xl text-center'>
          <div className='text-center mb-3'>
            <UserPlus2Icon className='mx-auto  text-green-400' />
          </div>
          <h1 className='text-[40px] text-black mb-1 font-bold'>Register</h1>
          <p className='text-gray-500 mb-4'>
            Make new notes to bring your note together
          </p>
          <form action=''>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='text-left w-full flex text-gray-400 text-[13px] mb-1'
              >
                Enter Your Email
              </label>
              <input
                id='email'
                type='email'
                placeholder='example@gmail.com'
                className='bg-gray-100 w-full py-2 px-3 rounded outline-none'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='fname'
                className='text-left w-full flex text-gray-400 text-[13px] mb-1'
              >
                Enter Your First Name
              </label>
              <input
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
                id='lname'
                type='text'
                placeholder='Doe'
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
              Register
            </button>
          </form>

          <div className='mt-4'>
            <p className='text-gray-500 text-[14px]'>
              Already Have an account?
              <Link
                href='/login'
                className=' underline text-green-400 font-semibold ms-1'
              >
                Log In
              </Link>
            </p>
          </div>
          <p className='text-[13px] mt-4 text-gray-400'>
            This is the sign in page of next.js note taking app. Please sign in
            and put your notes here. Thanks
          </p>
        </div>
      </div>
    </>
  )
}

export default RegistrationPage
