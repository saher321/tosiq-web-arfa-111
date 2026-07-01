import express from 'express'
import { getColors } from '../controllers/colors.controller.js';

const colorsRouter = express.Router();

// http://localhost:5000/colors
colorsRouter.get('/colors', getColors)

export default colorsRouter