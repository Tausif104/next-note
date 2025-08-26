import { userList } from '@/app/actions/user-actions'
import UserCard from './_components/userCard'

const UserList = async () => {
  const users = await userList()

  return (
    <>
      <h1>Users {users.length}</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}

export default UserList
