import { UserPlus2Icon } from 'lucide-react'
import Link from 'next/link'
import RegistrationForm from './_components/registrationForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const RegistrationPage = async () => {
  const session = await auth()

  if (session?.user) {
    redirect('/dashboard')
  }
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
          {/* registration form */}
          <RegistrationForm />

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
