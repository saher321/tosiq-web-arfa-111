import mongoose, { Schema } from 'mongoose';

const customerSchema = new mongoose.Schema(
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
    address: {
      type: String,
      required: false,
      // minlength: 5
    },
    contact: {
      type: String,
      required: true,
      // minlength: 5
    },
    project_status: {
      type: String,
      enum: ['active', 'proccessing', 'completed', 'cancelled'],
      default: 'active',
    }
  },
  { timestamps: true }
);

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
