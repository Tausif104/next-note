import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      fathersname: {
        type: String,
      },
      mothersname: {
        type: String,
      },
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      hobby: {
        type: String,
      },
      profession: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
)

export const User = mongoose.models.User || mongoose.model('User', userSchema)
