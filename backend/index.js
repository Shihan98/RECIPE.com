const express = require("express");
const dbConnect = require("./config/dbConnect");
const RecipeRouter = require("./routes/recipe.route");

const app = express();

app.use(express.json());

dbConnect();

app.use("/api/v1/recipe", RecipeRouter);
app.get("/test", (req, res) => {
  res.send("Hello");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
