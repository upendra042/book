// index.js (server)
const express = require('express');
const app = express(); // ✅ Define app first

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Middleware
dotenv.config();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/book'));
app.use('/api/orders', require('./routes/order'));

// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
