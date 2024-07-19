import express from 'express';
import * as bookC from '../controllers/bookC.js'

const R = express.Router();

R.get('/', bookC.getAllBooks);
R.get('/:id', bookC.getAbook);
R.post('/', bookC.createAbook);
R.put('/:id', bookC.updateAbook);


export default R;
