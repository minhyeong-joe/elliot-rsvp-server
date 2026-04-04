import express from "express";
import { getAllAttendeesByGuess } from "../controllers/attendeeController.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const attendeesByGuess = await getAllAttendeesByGuess();
		res.status(200).json({ success: true, data: attendeesByGuess });
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
});

export default router;
