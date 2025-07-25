const mongoose = require('mongoose');

const profileViewSchema = new mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  email: { type: String, default: "N/A" },
  referrer: { type: String, default: "Direct" },
  viewedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ProfileView', profileViewSchema);
