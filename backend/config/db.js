import M from 'mongoose'
import D from 'dotenv'

D.config();

const connectDB = async () => {
    try {
        await M.connect(process.env.Mdb)
        console.log('Mongodb connection has been establish!');
    } catch (error) {
        console.log('Mongodb connection has failed', error.message);
        throw error;
    }
}

export default connectDB;