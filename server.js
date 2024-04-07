import app from "./app.js";
var cors = require('cors')
import cloudinary from "cloudinary";
// require('dotenv').config()
import dotenv from 'dotenv';
app.use(cors())
dotenv.config();
const PORT= process.env.PORT||4000
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
