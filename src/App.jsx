import React from 'react';
import LeftSection from './Components/LeftSection/LeftSection.jsx';
import RightSection from './Components/RightSection/RightSection.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeSection from './Components/HomeSection/HomeSection.jsx';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <LeftSection />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="explore" element={<div>Explore</div>} />
          <Route path="notifications" element={<div>Notifications</div>} />
          <Route path="messages" element={<div>Messages</div>} />
          <Route path="bookmarks" element={<div>Bookmarks</div>} />
          <Route path="lists" element={<div>Lists</div>} />
          <Route path="profile" element={<div>Profile</div>} />
        </Routes>
        <div>{<RightSection />}</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
