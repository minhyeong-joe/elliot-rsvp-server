import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

import getCorsOptions from "./config/cors.js";
import rsvpRoutes from "./routes/rsvp.js";

const app = express();

app.use(cors(getCorsOptions()));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("root")
});

app.get("/health", (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  
  if (mongoose.connection.readyState === 1) {
    res.status(200).json({ status: 'OK', database: dbStatus });
  } else {
    res.status(503).json({ status: 'Service Unavailable', database: dbStatus });
  }
});

app.use('/rsvp', rsvpRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
