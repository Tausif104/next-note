const UserCard = ({ user }) => {
  return (
    <div className='border mb-2'>
      <h1 className='font-bold'>{user.firstname}</h1>
      <h1>{user.lastname}</h1>
      <h1>{user.email}</h1>
    </div>
  )
}

export default UserCard
