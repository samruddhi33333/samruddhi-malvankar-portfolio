// routes/profileViews.js
import express from "express";
import ProfileView from "../models/ProfileView.js";
import axios from "axios"; // for IP geolocation if needed

const router = express.Router();

router.post("/log", async (req, res) => {
  try {
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const userAgent = req.headers["user-agent"];
    const referrer = req.headers.referer || "Direct";

    // Optionally get location using IP (external service)
    // const locationData = await axios.get(`https://ipapi.co/${ip}/json/`);
    // const location = locationData.data.city + ', ' + locationData.data.country_name;

    const newView = new ProfileView({
      ip,
      userAgent,
      referrer,
      // location,
    });

    await newView.save();
    res.status(200).json({ message: "Profile view logged" });
  } catch (error) {
    res.status(500).json({ error: "Failed to log view" });
  }
});

export default router;
