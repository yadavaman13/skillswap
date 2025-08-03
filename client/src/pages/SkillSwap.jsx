import React, { useState, useEffect } from 'react';
import { userService } from '../services/userService';
import './SkillSwap.css';

const SkillSwap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('Availability');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load users when component mounts
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const userData = await userService.getAllUsers();
      setUsers(userData);
      setError(null);
    } catch (err) {
      setError('Failed to load users');
      console.error('Error loading users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      loadUsers();
      return;
    }

    try {
      console.log('Searching for:', searchTerm);
      // For now, we'll use client-side filtering
      // In the future, this can be replaced with server-side search
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.skillsOffered.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        user.skillsWanted.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setUsers(filtered);
    } catch (err) {
      setError('Search failed');
      console.error('Search error:', err);
    }
  };

  const handleRequest = async (userId, userName) => {
    try {
      console.log(`Sending swap request to ${userName} (ID: ${userId})`);
      await userService.sendSkillSwapRequest(userId, `I'd like to swap skills with you!`);
      alert(`Skill swap request sent to ${userName}!`);
    } catch (err) {
      alert('Failed to send skill swap request. Please try again.');
      console.error('Request error:', err);
    }
  };

  const filteredUsers = users;

  if (loading) {
    return (
      <div className="skill-swap-container">
        <div className="loading-container">
          <p>Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="skill-swap-container">
        <div className="error-container">
          <p>Error: {error}</p>
          <button onClick={loadUsers}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="skill-swap-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Skill Swap Platform</div>
        <div className="header-center">
          <button className="swap-request-btn">Swap request</button>
          <div className="profile-avatar">👤</div>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="availability-filter">
          <span>{availabilityFilter}</span>
          <span>▼</span>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for skills or users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            search
          </button>
        </div>
      </div>

      {/* Users List */}
      <div className="users-container">
        {filteredUsers.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              Profile Photo
            </div>
            
            <div className="user-info">
              <h3 className="user-name">{user.name}</h3>
              
              <div className="skills-section">
                <div className="skills-row">
                  <span className="skills-label">Skills Offered ➔</span>
                  <div className="skills-list">
                    {user.skillsOffered.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                
                <div className="skills-row">
                  <span className="skills-label wanted">Skill wanted ➔</span>
                  <div className="skills-list">
                    {user.skillsWanted.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="user-actions">
              <button 
                className="request-btn"
                onClick={() => handleRequest(user.id, user.name)}
              >
                Request
              </button>
              <div className="rating">rating {user.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSwap;
