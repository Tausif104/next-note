import { LogInIcon } from 'lucide-react'
import Link from 'next/link'
import LoginForm from './_components/loginForm'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'

const LoginPage = async () => {
  const session = await auth()

  if (session?.user) {
    redirect('/dashboard')
  }

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='container max-w-[450px] shadow-xl bg-whiteshadow-lg p-7 rounded-xl text-center'>
          <div className='text-center mb-3'>
            <LogInIcon className='mx-auto  text-green-400' />
          </div>
          <h1 className='text-[40px] text-black mb-1 font-bold'>Sign In</h1>
          <p className='text-gray-500 mb-4'>
            Make new notes to bring your note together
          </p>
          <LoginForm />

          <div className='mt-4'>
            <p className='text-gray-500 text-[14px]'>
              Don't have an account?
              <Link
                href='/registration'
                className=' underline text-green-400 font-semibold ms-1'
              >
                Register
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

export default LoginPage
