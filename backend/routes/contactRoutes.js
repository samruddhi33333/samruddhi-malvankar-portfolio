// backend/routes/contactRoutes.js
import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    console.log("✅ Saved message:", newMessage);
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error("❌ Error saving message:", error); // this is important
    res.status(500).json({ error: 'Failed to save message' });
  }
});

export default router;
