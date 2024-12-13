import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import AuthRoute from './routes/Auth.route.js'

dotenv.config()
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGODB_CONN)
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Database connection failed.', err))


app.use('/api/auth', AuthRoute)

const port = process.env.PORT
app.listen(port, () => {
    console.log('Server running on port:', port)
}) 
