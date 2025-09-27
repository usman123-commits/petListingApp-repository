const express = require("express");
const Card = require("../models/Card");
const router = express.Router();
const { body, validationResult } = require("express-validator");
var IsAuthenticated = require("../middleware/IsAuthenticated");
const googleUser = require("../models/GoogleUsers");
const User = require("../models/User");

const { Types, Mongoose } = require("mongoose");
// FETCHING ALL THE DATA
router.get("/fetchallcards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;


// Route for adding card

router.post(
  "/addcard",
  IsAuthenticated,
  [
    body("tag", "Enter a valid tag").isLength({ min: 2 }),
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("price", "Enter a valid price").isNumeric().isLength({ min: 1 }),
    body("location", "Enter a valid location").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {

      const { title, description, price, location, tag, imageUrl } = req.body;
      if (!Array.isArray(imageUrl) || imageUrl.length === 0) {
        console.error("Error: imageUrl is not an array or is empty!");
        return;
      }
      // If there are validation errors, return Bad Request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const user = await googleUser.findById(req.user._id.toString())

      const card = new Card({
        title,
        description,
        price,
        location,
        imageUrl,
        user: req.user._id,
        name: user.name,
        tag
      });

      const savedCard = await card.save();

      res.json(savedCard);
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .send({ error: "Internal Server Error", details: error.message });
    }
  }
);
module.exports = router;


// FETCHING ALL MY DATA
router.get("/fetchMycards", IsAuthenticated, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const cards = await Card.find({ user: userId });
    res.json(cards)
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;





// FETCHING DATA FOR DISPLAYING CARITEM
router.post("/fetchMycarditem", async (req, res) => {
  try {
    // id of the card to be find
    const userId = req.body.id;

    const card = await Card.find({ _id: userId });
    res.json(card);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});
module.exports = router;

// SEARCHING DATA
router.post("/searching", async (req, res) => {
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



// ADDING FEATURE FOR FAVOURITE



// POSTING FAVOITE IDS FOR FAVOURITE


// REMOVING FAVOITE ADDS 

router.post("/removeFav", IsAuthenticated, async (req, res) => {
  try {
    // UPDATING CARDS
    //  const mappedArray = array.map((id)=>{return  Types.ObjectId(id)     })
    const idFromUser = req.body.id;
    if (!Types.ObjectId.isValid(idFromUser)) {
      return res.status(400).json({ error: "Invalid ID format" });
    }

    const userId = req.user._id.toString();

    const updatedUser = await googleUser.findByIdAndUpdate(
      userId,
      { $pull: { favourites: idFromUser } },
      { new: true } // This returns the updated document
    ).select("favourites");

    res.status(200).json({
      message: "Card removed from favourites",
      favourites: updatedUser.favourites,
    });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }
});


// adding user`s favourite cards into an array stored in google user
router.post("/fav-cards", IsAuthenticated, async (req, res) => {
 try {
  const idFromUser = req.body.id;

  // ✅ Validate ObjectId format
  if (!Types.ObjectId.isValid(idFromUser)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  // ✅ Find user
  const user = await googleUser.findById(req.user._id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // ✅ Check and update favourites
  if (!user.favourites.includes(idFromUser)) {
    user.favourites.push(idFromUser);
    await user.save();
    return res.status(200).json({ message: "Card added to favourites" });
  } else {
    return res.status(200).json({ message: "You have already favourited this ad" });
  }

} catch (error) {
  console.error(error.message);
  return res.status(500).json({
    error: "Internal Server Error",
    details: error.message
  });
}
});


// extracting fav id array

router.get("/checking-favId", IsAuthenticated, async (req, res) => {
  try {

    const user = await googleUser.findById(req.user._id.toString());

    res.json({ favourite: user.favourites })

  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }

})

// using array of fav ids to find all fav cards

router.post("/finding-favCards", IsAuthenticated, async (req, res) => {
  try {

    const array = req.body.array;
    const favCards = await Card.find({ _id: { $in: array } });
    res.json({ favCards })

  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }

})




module.exports = router;