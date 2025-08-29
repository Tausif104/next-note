'use server'

import { User } from '@/models/user-model'
import bcrypt from 'bcrypt'
import { signIn, signOut, auth } from '@/auth'
import { revalidatePath } from 'next/cache'
import mongoose from 'mongoose'

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
      msg: 'User doesnt exist, Please Register.',
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

// update profile
export const updateProfile = async (prevState, formData) => {
  const session = await auth()

  const loggedInUser = await User.findOne({ email: session?.user?.email })

  const { fathersname, mothersname, phone, address, hobby, profession } =
    Object.fromEntries(formData)

  const updateFields = {
    fathersname,
    mothersname,
    phone,
    address,
    hobby,
    profession,
  }

  Object.keys(updateFields).forEach(
    (key) => (updateFields[key] === '' || undefined) && delete updateFields[key]
  )

  const profileData = {}

  Object.keys(updateFields).forEach(
    (key) => (profileData[`profile.${key}`] = updateFields[key])
  )

  const updatedUser = await User.findByIdAndUpdate(
    loggedInUser.id,
    profileData,
    { new: true }
  )

  if (updatedUser) {
    return {
      msg: 'Profile Updated',
      success: true,
    }
  }

  revalidatePath('/dashboard/profile')
}

// get user profile
export const getUserProfile = async () => {
  const session = await auth()

  const user = await User.findOne({ email: session?.user?.email })

  return {
    user,
  }
}
