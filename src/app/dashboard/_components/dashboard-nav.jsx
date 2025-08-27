'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LogoutButton from './logoutButton'

const DashboardNav = () => {
  const pathname = usePathname()

  console.log(pathname)

  const menus = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Users',
      href: '/dashboard/users',
    },
    {
      label: 'Posts',
      href: '/dashboard/posts',
    },
    {
      label: 'Category',
      href: '/dashboard/category',
    },
    {
      label: 'Profile',
      href: '/dashboard/profile',
    },
  ]

  return (
    <>
      <div className='bg-gray-100 rounded-xl p-4 min-h-[70vh] flex flex-col justify-between'>
        <ul className='flex flex-col gap-2 '>
          {menus.map((item) => (
            <li key={item.label}>
              <Link
                className={`w-full inline-block px-5 py-3 rounded-md hover:bg-green-400 transition duration-300 ${
                  pathname === item.href && 'bg-green-400'
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <LogoutButton />
      </div>
    </>
  )
}

export default DashboardNav
