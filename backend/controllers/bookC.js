import Book from "../models/bookM.js";

const getAllBooks = async (req,res) => {
   try {
     const books = await Book.find();
     res.status(200).json(books)
   } catch (error) {
    console.error('Error at finding books', error);
    return res.status(500).json({ error: "Internal server error!" });
   }
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