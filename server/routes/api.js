const api = require("express").Router();

// Sample users data (in a real app, this would come from a database)
const sampleUsers = [
  {
    id: 1,
    name: 'Marc Demo',
    avatar: null,
    skillsOffered: ['Java Script', 'PHP'],
    skillsWanted: ['CSS', 'React.js'],
    rating: '3.0/5'
  },
  {
    id: 2,
    name: 'Michell',
    avatar: null,
    skillsOffered: ['Java Script', 'PHP'],
    skillsWanted: ['CSS', 'Digital Marketing'],
    rating: '2.5/5'
  },
  {
    id: 3,
    name: 'Joe Wills',
    avatar: null,
    skillsOffered: ['Java Script', 'PHP'],
    skillsWanted: ['CSS', 'Graphic Designer'],
    rating: '4.0/5'
  }
];

// Sample skill requests data
let skillRequests = [];

api.get("/", (req, res)=>{
    res.send("SkillSwap API is running");
});

// Get all users
api.get("/users", (req, res) => {
    res.json(sampleUsers);
});

// Search users
api.get("/users/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        return res.json(sampleUsers);
    }
    
    const filteredUsers = sampleUsers.filter(user =>
        user.name.toLowerCase().includes(q.toLowerCase()) ||
        user.skillsOffered.some(skill => skill.toLowerCase().includes(q.toLowerCase())) ||
        user.skillsWanted.some(skill => skill.toLowerCase().includes(q.toLowerCase()))
    );
    
    res.json(filteredUsers);
});

// Send skill swap request
api.post("/skill-requests", (req, res) => {
    const { targetUserId, message } = req.body;
    
    if (!targetUserId) {
        return res.status(400).json({ error: "Target user ID is required" });
    }
    
    const newRequest = {
        id: skillRequests.length + 1,
        targetUserId,
        message: message || "I'd like to swap skills with you!",
        status: "pending",
        createdAt: new Date().toISOString()
    };
    
    skillRequests.push(newRequest);
    res.status(201).json({ success: true, request: newRequest });
});

// Get skill swap requests for a user
api.get("/users/:userId/skill-requests", (req, res) => {
    const { userId } = req.params;
    const userRequests = skillRequests.filter(request => 
        request.targetUserId === parseInt(userId)
    );
    res.json(userRequests);
});

// Update user profile
api.put("/users/:userId", (req, res) => {
    const { userId } = req.params;
    const userIndex = sampleUsers.findIndex(user => user.id === parseInt(userId));
    
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    
    // Update user data (in a real app, this would update the database)
    sampleUsers[userIndex] = { ...sampleUsers[userIndex], ...req.body };
    res.json(sampleUsers[userIndex]);
});

module.exports = api;