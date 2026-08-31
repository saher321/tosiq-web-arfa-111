import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    projectTitle: {
      type: String,
      required: true,
      trim: true, // => John        Mathew :: John Mathew
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
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
      enum: ['active', 'pending', 'proccessing', 'completed', 'cancelled'],
      default: 'active',
    }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
