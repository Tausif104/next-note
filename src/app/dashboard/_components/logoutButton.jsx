import { logOut } from '@/app/actions/user-actions'

const LogoutButton = () => {
  return (
    <form action={logOut}>
      <button
        type='submit'
        className='cursor-pointer w-full py-3 bg-black text-white inline-block rounded-md px-4'
      >
        Log Out
      </button>
    </form>
  )
}

export default LogoutButton
