// ******* PKGS *******
// express    => run and create projects and urls,
// nodemon    => auto restart server/backend, 
// mongoose   => db manupulation, 
// nanoid     => random string generate, 
// nodemailer => for emails, 
// dotenv     => for accessing secrete details, 
// cors       => cross plateform data access
// bcryptjs   => password enc/dec
// jsonwebtoken => authentication
// multer     => files uploading

import express from 'express'
import colorsRouter from './routes/colors.route.js';

const app = express();
const PORT = 5000
const PREFIXV1 = '/v1'

// getting all colors:
// http://localhost:5000/v1/colors
app.use(PREFIXV1 , colorsRouter)

app.listen(PORT, () => {
  console.log(`Server is started http://localhost:${PORT}` )
})