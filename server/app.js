const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const apiRouter = require("./routes/api");

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// CORS middleware to allow frontend to communicate with backend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Vite default port
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use("/api", apiRouter);

let PORT = 3001 || process.env.PORT; // Changed to 3001 to match frontend API config
app.listen(PORT, () => {
    console.log(`SkillSwap server running on port ${PORT}`);
});