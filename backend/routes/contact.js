const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Route to handle contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, query } = req.body;

    // Create a new Query document
    const newContact = new Contact({
      name,
      email,
      query,
    });

    // Save the query to the database
    const savedContact = await newContact.save();

    res.json(savedContact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
