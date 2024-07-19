import mongoose from "mongoose";
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
const getAbook = async (req,res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Object id is not valid'});
  }
try {
    const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({error: 'The book is not exist'});
  }
  res.status(200).json(book); 
} catch (error) {
    console.error('Error at finding a book', error);
    return res.status(500).json({ error: "Internal server error!" });
}
 
};

const createAbook = async (req,res) => {

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

const updateAbook = async (req, res) => {
  const { id } = req.params;
  const { name, author, page, description, rating, image, uploadDate } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'Object id is not valid'});
  }
  try {
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({error: 'The book is not exist'});
    }

    book.name = name || book.name;
    book.author = author || book.author;
    book.page = page || book.page;
    book.description = description || book.description;
    book.rating = rating || book.rating;
    book.image = image || book.image;
    book.uploadDate = uploadDate || book.uploadDate;
    
    await book.save();

    res.status(200).json({message: 'The book updated!'})

  } catch (error) {
    console.error('Error at updating a book', error);
    return res.status(500).json({ error: "Internal server error!" });
  }
};

export { getAllBooks, getAbook, createAbook, updateAbook }