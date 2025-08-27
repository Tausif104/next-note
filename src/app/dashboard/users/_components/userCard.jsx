const UserCard = ({ user }) => {
  return (
    <tr key={user.id}>
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800'>
        {user?.firstname} {user?.lastname}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
        {user?.email}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
        {user?.id}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
        <button
          type='button'
          className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-400 hover:text-green-800 hover:cursor-pointer focus:outline-hidden focus:text-green-800 disabled:opacity-50 disabled:pointer-events-none'
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default UserCard
