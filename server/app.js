const express = require("express");
const apiRouter = require("./routers/api");

const app = express();

app.use("/api", apiRouter);
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});