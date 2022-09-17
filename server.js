const express = require("express");
const cors = require("cors");

var app = express();

app.use(cors());
// const SerpApi = require("google-search-results-nodejs");
// const search = new SerpApi.GoogleSearch(
//   "67dffa269b9484439b79ad78beb99613ac8bd9c64c4653072d5c7c020dbfe0cf"
// );

// const params = {
//   engine: "google",
//   q: "Coffee",
// };

// const callback = function (data) {
//   console.log(data["organic_results"]);
// };

// // Show result as JSON
// search.json(params, callback);
app.get("/", (req, res) => {
  return "Hi";
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server started on port localhost:${PORT}`);
});
