import express from 'express';
import { createAttendee } from '../controllers/attendeeController.js';
import { createMessage } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Received RSVP:', req.body);
    const { message, anonymous, ...attendeeData } = req.body;
    try {
        const newAttendee = await createAttendee(attendeeData);
        if (message && message.trim() !== '') {
            await createMessage({ message, anonymous, attendeeId: newAttendee._id });
        }
        res.status(201).json({ success: true, message: "RSVP stored successfully", data: newAttendee });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;