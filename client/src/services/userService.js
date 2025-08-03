import api from './api';

// User-related API calls
export const userService = {
  // Get all users for skill swapping
  async getAllUsers() {
    try {
      return await api.get('/users');
    } catch (error) {
      console.error('Failed to fetch users:', error);
      // Return mock data for now
      return [
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
    }
  },

  // Search users by skills or name
  async searchUsers(searchTerm) {
    try {
      return await api.get(`/users/search?q=${encodeURIComponent(searchTerm)}`);
    } catch (error) {
      console.error('Failed to search users:', error);
      throw error;
    }
  },

  // Send a skill swap request
  async sendSkillSwapRequest(targetUserId, message = '') {
    try {
      return await api.post('/skill-requests', {
        targetUserId,
        message
      });
    } catch (error) {
      console.error('Failed to send skill swap request:', error);
      throw error;
    }
  },

  // Get user's skill swap requests
  async getSkillSwapRequests(userId) {
    try {
      return await api.get(`/users/${userId}/skill-requests`);
    } catch (error) {
      console.error('Failed to fetch skill swap requests:', error);
      throw error;
    }
  },

  // Update user profile
  async updateUserProfile(userId, profileData) {
    try {
      return await api.put(`/users/${userId}`, profileData);
    } catch (error) {
      console.error('Failed to update user profile:', error);
      throw error;
    }
  }
};
