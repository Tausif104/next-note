import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import DashboardHeader from './_components/dashboard-header'
import DashboardNav from './_components/dashboard-nav'
import Image from 'next/image'

export default async function DashboardLayout({ children }) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div>
      <div className='container mx-auto mt-[80px]'>
        <DashboardHeader />
        <div className='grid grid-cols-4 gap-6 mt-5'>
          <div className='col-span-1'>
            <DashboardNav />
          </div>
          <div className='col-span-3 bg-gray-100 p-5 rounded-xl'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
