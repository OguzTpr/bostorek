import M from 'mongoose'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const userSchema = new M.Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
            minLength: 4,
            maxLength: 20,
        },
        eMail: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: [emailRegex, 'invalid email!'],
        },
        passWord: {
            type: String,
            required: true,
            trim: true,
            minLength: 4,
            maxLength: 16,
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },

    { timestamps: true }
)

const User = M.model('User', userSchema)

export default User
