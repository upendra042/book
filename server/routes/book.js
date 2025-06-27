// server/routes/book.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// ✅ Import middleware BEFORE using it
const { verifyToken, authorizeRoles } = require('../middleware/auth');

// GET all books (public)
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST - Add a book (Only for seller or admin)
router.post('/', verifyToken, authorizeRoles('seller', 'admin'), async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: 'Book creation failed', details: err.message });
  }
});

module.exports = router;
