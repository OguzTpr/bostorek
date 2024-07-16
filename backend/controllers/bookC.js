import Book from "../models/bookM.js";

const getAllBooks = (req,res) => {
   console.log(`GET ALL BOOKS`)
}

const createBook = async (req,res) => {

   try {
    
    const { name, author} = req.body;
    
    const existBook = await Book.findOne({name, author});

    if (existBook) {
        return res.status(400).json({error: 'A book with same title and author already exist!'})
    }

    const newBook = await Book.create(req.body);

    return res.status(201).json({message:"Book created succesfully!", book: newBook})
    
   } catch (error) {

    // Handle mongoose validation error
    if (error.name === 'ValidationError') {

        const validationErrors = {}

        for (let field in error.errors) {

            validationErrors[field] = error.errors[field].message;
        }
        
        return res.status(400).json({error: "Validation error", validationErrors})
    } else {
        console.error('Error at creating book', error);
        return res.status(500).json({error: 'Internal Server Error!'})
    }
       
   }
}

export { getAllBooks, createBook }