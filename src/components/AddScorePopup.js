import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../store/LeaderboardSlice';
import './AddScorePopup.css';

const AddScorePopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();

  const handleAddScore = () => {
    if (username && score) {
      dispatch(addScore({ username, score }));
      onClose();
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Add Score</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Score (MM:SS:MS):
          <input
            type="text"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </label>
        <div className="popup-buttons">
          <button onClick={handleAddScore}>Add</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddScorePopup;
