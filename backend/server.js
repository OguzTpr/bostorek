import express from 'express'
import bookR from './routes/bookR.js'
import authR from './routes/authR.js'
import connectDB from './config/db.js'
import C from 'cors'

const A = express()
const P = 3000
const H = '127.0.0.1'
const Copt = {
    origin: 'http://localhost:5173',
    credentials: true,
}
A.use(C(Copt))
A.use(express.json())
A.use('/api/v1/books', bookR)
A.use('/api/v1/auth', authR)

try {
    await connectDB()

    A.listen(P, H, () => {
        console.log(`Server Running on ${H}:${P}`)
    })
} catch (error) {
    process.exit(1)
}
