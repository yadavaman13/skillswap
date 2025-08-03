const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const apiRouter = require("./routes/api");


app.use("/api", apiRouter);

let PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});