'use server'

import { User } from '@/models/user-model'
import bcrypt from 'bcrypt'
import { signIn, signOut } from '@/auth'

// registration
export const registerUser = async (prevState, formData) => {
  const firstname = formData.get('firstname')
  const lastname = formData.get('lastname')
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmpass = formData.get('confirmpass')

  if (password !== confirmpass) {
    return {
      msg: 'Password did not match',
      success: false,
    }
  }

  const hashedPass = await bcrypt.hash(password, 10)

  const userExists = await User.findOne({ email })

  if (userExists) {
    return {
      msg: 'User already exists',
      success: false,
    }
  }

  const data = {
    firstname,
    lastname,
    email,
    password: hashedPass,
  }

  const user = await User.create(data)

  if (user) {
    return {
      msg: `${user.firstname} Welcome`,
      success: true,
    }
  }
}

// login
export const loginUser = async (prevState, formData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  const user = await User.findOne({ email })

  if (!user) {
    return {
      msg: 'User doesnt exis, Please Register.',
      success: false,
    }
  }

  const credentials = await bcrypt.compare(password, user.password)

  if (!credentials) {
    return {
      msg: 'Password didnt match',
      success: false,
    }
  }

  const response = await signIn('credentials', {
    redirectTo: '/dashboard',
    email: email,
    password: password,
  })
}

// log out
export const logOut = async () => {
  await signOut()
}

// listusers
export const userList = async () => {
  const user = await User.find({})
  return user
}
