const express = require("express");
const mahasiswaRoute = require("./routes/MahasiswaRoute");
const app = express();

const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use("/api/mahasiswa", mahasiswaRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
