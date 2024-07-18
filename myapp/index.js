const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product'); // Import product routes

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// CORS options
const corsOptions = {
  origin: 'http://localhost:3001', // Replace with your frontend URL
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes); // Use product routes

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
