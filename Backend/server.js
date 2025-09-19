const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
// Import Routes
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Mount Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Admin dashboard route
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin', 'index.html'));
});
// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Note: useNewUrlParser and useUnifiedTopology are no longer needed in newer mongoose versions
      // They're automatically set to true
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

// Error handling middleware (should be after routes)
app.use(errorHandler);
// Connect to database before starting server
connectDB().then(() => {
  // Start Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    console.log(`Admin dashboard available at: http://localhost:${PORT}/admin`);
  });
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});
