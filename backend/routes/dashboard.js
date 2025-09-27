const express = require("express");
const Card = require("../models/Card");
const router = express.Router();
const User = require("../models/User");





// ============================
// 📝 SEARCH BY TAG
// ============================
router.post("/searchingTag", async (req, res) => {
  try {
    const tag = req.body.tag;

    const card = await Card.find({ tag: tag });
    res.json(card);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;




// ============================
// 📝 SEARCH BY ID
// ============================
router.post("/searchingId", async (req, res) => {
  try {
    const id = req.body.id;

    const card = await Card.find({ _id: id });
    res.json(card);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;




// ============================
// 📝 SEARCH BY USERNAME
// ============================

router.post("/searchingUser", async (req, res) => {
  try {
    const user = req.body.user;

    const card = await Card.find({ name: user });
    res.json(card);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;



// ============================
// 📝 DELETING ADDS
// ============================

router.post("/deletingAdds", async (req, res) => {
  try {
    const id = req.body.id;

    const card = await Card.deleteOne({ _id: id });
    res.json(card);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;




// ============================
// 📝 SEARCHING 
// ============================

router.post("/searchingbyRegex", async (req, res) => {
  const { query } = req.body;
  try {
    // Check if query is an exact ID match (IDs should not use regex)
    const isExactId = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(query); // Ensures alphanumeric only

    const results = await User.find({
      $or: [
        ...(isExactId ? [{ _id: query }] : []),
        { email: { $regex: new RegExp(query, "i") } },
        { name: { $regex: new RegExp(query, "i") } }
      ],
    });
   

    res.json(results);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error performing search" });
  }
});
module.exports = router;





router.post("/searchingAddsAndUserdata", async (req, res) => {
  const { id } = req.body;
  try {

    
    const adds = await Card.find({ user: id })

    res.json(adds);
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error performing search" });
  }
});
module.exports = router;