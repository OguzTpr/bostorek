import User from '../models/userM.js'
import { checkValidation } from '../utils/index.js'
const register = async (req, res) => {
    try {
        const { eMail } = req.body

        const existEmail = await User.findOne({ eMail })
        if (existEmail) {
            return res.status(400).json({
                error: 'A user with same e-mail already exist!',
            })
        }

        const newUser = await User.create(req.body)
        return res
            .status(201)
            .json({ message: 'User created succesfully!', user: newUser })
    } catch (error) {
        // Handle mongoose validation error
        if (error.name === 'ValidationError') {
            if (checkValidation(error, res)) return
        } else {
            console.error('Error at new user register', error)
            return res.status(500).json({ error: 'Internal Server Error!' })
        }
    }
}

export { register }
