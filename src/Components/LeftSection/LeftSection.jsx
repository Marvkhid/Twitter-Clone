import React from 'react';
import { Link } from 'react-router-dom';
import './LeftSection.css';
import TwitterIcon from '../../assets/Twitter.png';
import ProfilePicture from '../../assets/ProfilePicture.jpg';
import HomeIcon from '../../assets/Home-fill.png';
import ExploreIcon from '../../assets/Explore.png';
import NotificationsIcon from '../../assets/Notifications.png';
import MessagesIcon from '../../assets/Messages.png';
import BookmarksIcon from '../../assets/Bookmarks.png';
import ListsIcon from '../../assets/Lists.png';
import ProfileIcon from '../../assets/Profile.png';
import MoreIcon from '../../assets/More-2.png';
import More from '../../assets/More.png';
import VectorIcon from '../../assets/Vector.png';

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="container">
        <header>
          <img src={TwitterIcon} alt="Twitter Icon" className="twitter-icon" />
        </header>
        <nav>
          <Link to="/"><span><img src={HomeIcon} alt="Home Icon" className="nav-icon" />Home</span></Link>
          <Link to="/explore"><span><img src={ExploreIcon} alt="Explore Icon" className="nav-icon" />Explore</span></Link>
          <Link to="/notifications"><span><img src={NotificationsIcon} alt="Notifications Icon" className="nav-icon" />Notifications</span></Link>
          <Link to="/messages"><span><img src={MessagesIcon} alt="Messages Icon" className="nav-icon" />Messages</span></Link>
          <Link to="/bookmarks"><span><img src={BookmarksIcon} alt="Bookmarks Icon" className="nav-icon" />Bookmarks</span></Link>
          <Link to="/lists"><span><img src={ListsIcon} alt="Lists Icon" className="nav-icon" />Lists</span></Link>
          <Link to="/profile"><span><img src={ProfileIcon} alt="Profile Icon" className="nav-icon" />Profile</span></Link>
          <Link to="/profile"><span><img src={More} alt="More Icon" className="nav-icon" />More</span></Link>
        </nav>
        <button className="tweet">Tweet</button>

        <footer>
          <button className="account-info">
            <div className="profile-picture">
              <img
                src={ProfilePicture}
                className="profilePicture"
                alt="Marvel Aden"
              />
            </div>
            <div>
              <div className="name">Adeniyi Marvel <span>
                <img src={VectorIcon} className='vector-icon' alt="" /></span></div>
              <div className="username">@Marvkhid</div>
              </div>
              <div>
              <img src={MoreIcon} alt="More Icon" className="nav-icon" />
              </div>
           
          </button>
        </footer>
      </div>
    </div>
  );
};

export default LeftSection;
