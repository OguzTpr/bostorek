import express from 'express';
const A = express();
const P = 3000;
const H = '127.0.0.1';

A.get('/', (req, res) =>{
    res.send('Hellooo5!');
});

A.listen(P, H, () =>{
    console.log( `Server Running on ${H}:${P}` );
});