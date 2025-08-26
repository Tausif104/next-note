import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  )
}
