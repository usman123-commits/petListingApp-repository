const express = require("express");
const passport = require("passport");
const router = express.Router();



// Step 1: Redirect user to Google for authentication
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Step 2: Google OAuth callback route
router.get("/google/callback", 
  passport.authenticate("google", { failureRedirect: "/login" }), 
  (req, res) => {
    res.redirect("http://localhost:3000"); // Redirect to your frontend
  }
);

// checking status

router.get("/checkStatus",(req,res)=>{
 if(req.isAuthenticated()){
  res.json({isLogin:true,user:req.user})
 }else{
  res.json({isLogin:false})
 }
})

  // logging out user and destroying session
  router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Pass errors to the error handler
    }

    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }

      res.clearCookie("sessionIdForPetApp"); // Clear the custom session cookie
      res.status(200).json({ message: "Logged out successfully" });
    });
  });
});




module.exports = router;








