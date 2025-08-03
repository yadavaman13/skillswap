# SkillSwap Feature Integration

## Overview
The SkillSwap feature has been successfully integrated into your application. This feature allows users to:
- Browse other users and their skills
- Search for users by name or skills
- Send skill swap requests
- View skills offered and wanted by each user

## Features Added

### 1. SkillSwap Component (`/client/src/pages/SkillSwap.jsx`)
- **Search functionality**: Users can search for other users by name or skills
- **User cards**: Display user information, skills offered, skills wanted, and ratings
- **Request system**: Send skill swap requests to other users
- **Responsive design**: Mobile-friendly layout

### 2. API Services (`/client/src/services/`)
- **api.js**: Base API configuration and HTTP methods
- **userService.js**: User-specific API calls for skill swapping

### 3. Backend API Routes (`/server/routes/api.js`)
- `GET /api/users` - Get all users
- `GET /api/users/search?q=term` - Search users by skills or name
- `POST /api/skill-requests` - Send skill swap requests
- `GET /api/users/:userId/skill-requests` - Get user's skill requests
- `PUT /api/users/:userId` - Update user profile

### 4. Styling (`/client/src/pages/SkillSwap.css`)
- Modern, clean design
- Responsive layout
- Professional color scheme
- Hover effects and animations

## How to Use

### For Users:
1. Navigate to the "Skill Swap" page using the navigation menu
2. Browse through available users
3. Use the search bar to find users with specific skills
4. Click "Request" to send a skill swap request to another user

### For Developers:
1. The component uses React hooks for state management
2. API calls are handled through the userService
3. Error handling and loading states are included
4. The backend provides RESTful API endpoints

## Getting Started

### Prerequisites
- Node.js installed
- Both client and server running

### Running the Application

1. **Start the Server:**
   ```bash
   cd server
   npm install
   npm start
   ```
   Server will run on http://localhost:3001

2. **Start the Client:**
   ```bash
   cd client
   npm install
   npm run dev
   ```
   Client will run on http://localhost:5173

3. **Access SkillSwap:**
   - Open your browser to http://localhost:5173
   - Click on "Skill Swap" in the navigation menu

## Current Data Structure

### User Object
```javascript
{
  id: number,
  name: string,
  avatar: string | null,
  skillsOffered: string[],
  skillsWanted: string[],
  rating: string
}
```

### Skill Request Object
```javascript
{
  id: number,
  targetUserId: number,
  message: string,
  status: 'pending' | 'accepted' | 'rejected',
  createdAt: string
}
```

## Future Enhancements

### Ready to Implement:
1. **Database Integration**: Replace sample data with real database
2. **User Authentication**: Add login/signup functionality
3. **Real-time Notifications**: WebSocket integration for instant notifications
4. **Advanced Filtering**: Filter by skill level, location, availability
5. **Rating System**: Allow users to rate skill exchanges
6. **Messaging System**: In-app messaging between users
7. **Profile Management**: User profile creation and editing
8. **Skill Categories**: Organize skills into categories

### Technical Improvements:
1. **State Management**: Add Redux or Context API for global state
2. **Form Validation**: Add proper form validation
3. **Image Upload**: Profile picture upload functionality
4. **Search Optimization**: Server-side search with pagination
5. **Caching**: Implement caching for better performance
6. **Testing**: Add unit and integration tests

## File Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── SkillSwap.jsx      # Main component
│   │   └── SkillSwap.css      # Styling
│   ├── services/
│   │   ├── api.js             # Base API service
│   │   └── userService.js     # User-specific API calls
│   ├── components/
│   │   └── Navbar.jsx         # Updated with SkillSwap link
│   └── App.jsx                # Updated with new route

server/
├── routes/
│   └── api.js                 # API endpoints for skill swapping
└── app.js                     # Server configuration with CORS
```

## API Documentation

### GET /api/users
Returns all users available for skill swapping.

### GET /api/users/search?q=searchTerm
Search users by name or skills.
- Query parameter: `q` (search term)

### POST /api/skill-requests
Send a skill swap request.
- Body: `{ targetUserId: number, message: string }`

### GET /api/users/:userId/skill-requests
Get skill requests for a specific user.

### PUT /api/users/:userId
Update user profile.
- Body: User object with fields to update

## Support
For any issues or questions about the SkillSwap feature, please check:
1. Console logs for API errors
2. Network tab for failed requests
3. Component state in React DevTools
