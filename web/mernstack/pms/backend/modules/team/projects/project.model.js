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
      unique: true,
    },
    startDate: {
      type: Date,
      required: true
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
    },
    notes: { type: String }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
