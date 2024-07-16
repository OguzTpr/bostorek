import express from 'express';
import bookR from './routes/bookR.js';
import connectDB from './config/db.js';

const A = express();
const P = 3000;
const H = '127.0.0.1';


A.use(express.json())
A.use('/api/v1/books', bookR);

try {
    await connectDB();

    A.listen(P, H, () =>{
        console.log( `Server Running on ${H}:${P}` );
    });
    
} catch (error) {
    process.exit(1)
}





