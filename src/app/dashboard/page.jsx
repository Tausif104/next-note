import Link from 'next/link'
import { logOut } from '../actions/user-actions'
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
      <form action={logOut}>
        <button
          type='submit'
          className='cursor-pointer bg-black text-white inline-block py-2 px-4'
        >
          Log Out
        </button>
      </form>
    </>
  )
}

export default Dashboard
