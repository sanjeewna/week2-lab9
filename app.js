const express = require("express");
const app = express();
const port = 3000; // You can use any available port

// Middleware for parsing JSON data
app.use(express.json());

app.post("/api/books", (req, res) => {
  // ... (existing code)

  // Your code to add a new book here
});

// Dummy data for books (for testing purposes)
let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

// Your API routes will go here

app.get("/api/books", (req, res) => {
    res.json(books);
  });

  app.post("/api/books", (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
    };

    books.push(newBook);
    res.status(201).json(newBook);
  })

  app.post("/api/books", (req, res) => {
    const newBook = {
      id: books.length + 1,
      title: req.body.title,
      author: req.body.author,
    };
  
    books.push(newBook);
    res.status(201).json(newBook);
  });

  app.put("/api/books/:id", (req, res) => {
    // ... (existing code)
  
    // Your code to update a book here
  });

  app.put("/api/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;
  
    // Find the index of the book with the given ID
    const bookIndex = books.findIndex((book) => book.id === bookId);
  
    if (bookIndex !== -1) {
      // Update the book with the new data
      books[bookIndex] = { id: bookId, ...updatedBook };
      res.json(books[bookIndex]);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  });

  app.delete("/api/books/:id", (req, res) => {
    // ... (existing code)
  
    // Your code to delete a book here
  });

  app.delete("/api/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
  
    // Find the index of the book with the given ID
    const bookIndex = books.findIndex((book) => book.id === bookId);
  
    if (bookIndex !== -1) {
      // Remove the book from the array
      books.splice(bookIndex, 1);
      res.json({ message: "Book deleted" });
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  });

  
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});