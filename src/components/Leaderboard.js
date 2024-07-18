import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = ({ setIsPopupOpen }) => {
  const leaderboard = useSelector(state => state.leaderboard);

  const getPlayerClass = (index) => {
    switch (index) {
      case 0:
        return 'gold';
      case 1:
        return 'silver';
      case 2:
        return 'bronze';
      default:
        return '';
    }
  };

  const getPrize = (index) => {
    switch (index) {
      case 0:
        return '₹50000';
      case 1:
        return '₹5000';
      case 2:
        return '₹500';
      default:
        return '';
    }
  };

  return (
    <div className="leaderboard-wrapper">
      <div className="leaderboard-header">
        <h1>FASTEST OF TODAY</h1>
      </div>
      <div className="leaderboard">
        <div className="leaderboard-titles">
          <span>NAME</span>
         
          <span>TIME</span>
        </div>
        <ul>
          {leaderboard.slice(0, 10).map((player, index) => (
            <li key={index} className={`leaderboard-item ${getPlayerClass(index)}`}>
              <span className="rank">{index + 1}</span>
              <span className="name">{player.username}</span>
              <span className="prize">{getPrize(index)}</span>
              <span className="score">{player.score}</span>
            </li>
          ))}
        </ul>
        <div className="recent-entry-wrapper">
          <h2>RECENT ENTRY</h2>
          {leaderboard.length > 10 && (
            <div className="recent-entry">
              <span className="rank">11</span>
              <span className="name">{leaderboard[10].username}</span>
              <span className="prize"></span>
              <span className="score">{leaderboard[10].score}</span>
            </div>
          )}
        </div>
      </div>
      <div className="banner">
        <button className="add-score-button" onClick={() => setIsPopupOpen(true)}>Add Score</button>
      </div>
    </div>
  );
};

export default Leaderboard;
