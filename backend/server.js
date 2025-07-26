const express= require('express')
const multer = require('multer')
const app= express()
const dotenv=require('dotenv').config()
const connectDb=require('./config/connectionDb')
const cors = require('cors')



const PORT = process.env.PORT || 3000
connectDb()


app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({storage});

app.use(express.static('public'));
app.use(cors());
app.use(express.static("public"))

app.use("/",require('./routes/user'));
app.use("/recipe", require('./routes/recipe'));


app.listen(PORT, (err) => {
    console.log(`APP IS RUNNING ON PORT ${PORT}`)
})
