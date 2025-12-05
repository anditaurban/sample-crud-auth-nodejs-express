require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Static folder (untuk akses file upload)
app.use('/public', express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', userRoutes);

// PORT dari Railway
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
