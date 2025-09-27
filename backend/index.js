require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const express = require("express");
var cors = require("cors");
const mongoURI = "mongodb://localhost:27017/pet-app";
const session = require("express-session");
const passport = require("passport");
require("./config/passport"); // Google OAuth Setup

const connectTomongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit the process with failure
  }
};
connectTomongo();

const app = express();
const port = 5000;

app.use(cors({
  origin: "http://localhost:3000", // ✅ Replace * with frontend URL
  credentials: true,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json()); 

app.use(session({
  secret: 'pubgPochinki@',
  saveUninitialized: false,
  resave: false, 
  // rolling:true,
   name:"sessionIdForPetApp",
  store: MongoStore.create({
    mongoUrl: mongoURI,
    collectionName: 'sessions',
    ttl: 14 * 24 * 60 * 60,
    autoRemove: 'native',
  }),
  cookie: {
    secure: false, 
    maxAge: 14 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "lax", // ✅ Add this for better cross-origin behavior
  },
}));

app.use(passport.initialize());
app.use(passport.session()); 



// available
// ("/api/auth") this is route name and this is ("./routes/auth) folder 
app.use("/api/auth",
   require("./routes/auth"));
app.use("/api/card", require("./routes/card"));
app.use("/api/dashboard", require("./routes/dashboard"));
app.use("/api/chat", require("./routes/chat"));
console.log("Server is starting...");

app.listen(port, () => {
  console.log(`pet-app/backend app listening on port ${port}`);
});
