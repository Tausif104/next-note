import { userList } from '@/app/actions/user-actions'
import UserCard from './_components/userCard'

const UserList = async () => {
  const users = await userList()

  return (
    <>
      <div className='flex flex-col'>
        <div className='-m-1.5 overflow-x-auto'>
          <div className='p-1.5 min-w-full inline-block align-middle'>
            <div className='overflow-hidden'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                    >
                      User ID
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList
