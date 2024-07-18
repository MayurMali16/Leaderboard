import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Leaderboard setIsPopupOpen={setIsPopupOpen} />
        {isPopupOpen && <AddScorePopup onClose={() => setIsPopupOpen(false)} />}
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
