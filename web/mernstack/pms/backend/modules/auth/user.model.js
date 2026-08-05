import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true, // => John        Mathew :: John Mathew
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // minlength: 5
    },
    role: {
      type: String,
      enum: ['pm', 'emp'],
      default: 'emp',
    },
    otp: {
      type: String,
      default: null,
    },
    isOtpVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
