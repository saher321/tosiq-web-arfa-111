import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: true,
      trim: true, // => John        Mathew :: John Mathew
    },
    customerId: {
      type: String,
      required: true,
      unique: true,
    },
    startDate: {
      type: Date,
      required: true,
      default: Date.now
      // minlength: 5
    },
    deadLine: {
      type: Date,
      required: true,
      // minlength: 5
    },
    projectStatus: {
      type: String,
      enum: ['active', 'proccessing', 'completed', 'cancelled'],
      default: 'active',
    }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
