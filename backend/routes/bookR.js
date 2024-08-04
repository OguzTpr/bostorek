import express from 'express'
import * as bookC from '../controllers/bookC.js'

const R = express.Router()

/* R.get('/', bookC.getAllBooks);
R.post('/', bookC.createAbook); */

R.route('/').get(bookC.getAllBooks).post(bookC.createAbook)

/* R.get('/:id', bookC.getAbook);
R.put('/:id', bookC.updateAbook);
R.delete('/:id', bookC.deleteAbook);*/

R.route('/:id')
    .get(bookC.getAbook)
    .post(bookC.updateAbook)
    .delete(bookC.deleteAbook)

export default R
