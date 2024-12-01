const express = require("express");
const cors = require("cors");
const helmet = require('helmet'); 
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const formRoutes = require("./routes/form.js");
const cookieParser = require("cookie-parser");
const multer  = require('multer')


const app = express();



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: "http://localhost:3000", 
    })
  );
  
  
  app.use(helmet());
  
 
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));



  // Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload'); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname); 
  }
});

const upload = multer({ storage: storage });

// Handle file uploads at the "/backend/upload" endpoint
app.post("/backend/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename); 
});


  app.use("/backend/auth", authRoutes);
  app.use("/backend/users", userRoutes);
  app.use("/backend/form", formRoutes);




app.listen(5000, () => {
    console.log('Listening on port 5000');
  });



module.exports = app;