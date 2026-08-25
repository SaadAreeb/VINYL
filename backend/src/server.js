require('dotenv').config();
const app = require('./app');
const connectDB= require ('./db/db')

connectDB();

app.listen(3000,()=>{
    console.log("Sever is running at port 3000");
})