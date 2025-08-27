import Link from 'next/link'
import { auth } from '@/auth'

const DashboardHeader = async () => {
  const session = await auth()

  return (
    <>
      <header>
        <div className='flex justify-between items-center'>
          <h1 className='text-[50px] font-bold'>
            <Link href='/dashboard'>Dashboard</Link>
          </h1>

          <h3>
            Welcome{' '}
            <Link className='underline font-bold' href='/dashboard/profile'>
              {session?.user?.name}
            </Link>
          </h3>
        </div>
      </header>
    </>
  )
}

export default DashboardHeader
