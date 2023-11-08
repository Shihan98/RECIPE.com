const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const RecipeRouter = require("./routes/recipe.route");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
    allowedMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  })
);
dbConnect();

app.use("/api/v1/recipe", RecipeRouter);
app.get("/test", (req, res) => {
  res.send("Hello");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
