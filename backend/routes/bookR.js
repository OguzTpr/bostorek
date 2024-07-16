import express from 'express';
import * as bookC from '../controllers/bookC.js'

const R = express.Router();

R.get('/', bookC.getAllBooks);
R.post('/', bookC.createBook);

export default R;
