const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection using Mongoose
mongoose.connect(
  "mongodb+srv://darrylbetts2023:Mongo1234@hyperiondev.hfryme2.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Routes and middleware can be added here

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
