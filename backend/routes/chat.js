const express = require("express");
const passport = require("passport");
const IsAuthenticated = require("../middleware/IsAuthenticated");
const router = express.Router();
const Comments = require("../models/Comments");


// posting the comment
router.post("/comment", IsAuthenticated, async (req, res) => {
 
   
  try {
    const userId = req.user._id.toString();
    const userName = req.user.name;
    const cardId = req.body.cardId;
     const text = req.body.text;

    const newPost = new Comments({ userId: userId, cardId: cardId, userName: userName, comments: [{ comment: text }]  })
    const response = await newPost.save();
    res.json(response)


  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: error.message });
  }

})


// adding comment to comments array. 
// postponed until ui of comments are prepared


// router.post("/comment", IsAuthenticated, async (req, res) => {
 
   
//   try {
//     const userId = req.user._id.toString();
   
//     const cardId = req.body.cardId;
//      const text = req.body.text;

//     const newPost = new Comments({ userId: userId, cardId: cardId, userName: userName, comments: [{ comment: text }]});

//     const response = await newPost.save();

//     res.json(response)


//   } catch (error) {
//     console.error(error.message);
//     res
//       .status(500)
//       .send({ error: "Internal Server Error", details: error.message });
//   }

// })


module.exports = router;