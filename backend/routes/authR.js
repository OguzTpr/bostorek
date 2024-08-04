import express from 'express'
import * as authC from '../controllers/authC.js'

const R = express.Router()

R.route('/register').post(authC.register)

export default R
