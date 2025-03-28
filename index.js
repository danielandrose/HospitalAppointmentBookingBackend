import express from 'express'
import movieRoutes from './routes/movies.route.js'
import connectDB from "./lib/db.js"

const app=express()
const PORT=3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectDB();

app.get('/',(req,res)=>{
    res.json({"message":"Hello Students"})
})

app.use('/movies',movieRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running at port ${PORT}`)
}) 