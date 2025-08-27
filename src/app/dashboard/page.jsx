import Link from 'next/link'
import { auth } from '@/auth'

const Dashboard = async () => {
  const session = await auth()

  return (
    <>
      <h1>Name: {session?.user?.name}</h1>
      <h1>Email {session?.user?.email}</h1>
      <h1>id {session?.user?.id}</h1>
      <Link className='underline' href='/dashboard/users'>
        Users
      </Link>
    </>
  )
}

export default Dashboard
