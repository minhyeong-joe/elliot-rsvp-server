import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.js";
connectDB();

import corsOptions from "./config/cors.js";
import rsvpRoutes from "./routes/rsvp.js";

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("root")
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.use('/rsvp', rsvpRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
