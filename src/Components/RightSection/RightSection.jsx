import React from 'react'
import './RightSection.css'
import Search from '../../assets/Search.png'
import Settings from '../../assets/Settings.png'
import More from '../../assets/More.png'
import NewYorkIcon from '../../assets/NewYork.png'
import CnnImage from '../../assets/CnnImage.png'
import TwitterLogo from '../../assets/TwitterLogo.png'
import VerifiedIcon from '../../assets/Verified.png';

const RightSection = () => {
  return (
    <div className='right-section'>


       <div>
        <img src={Search} className='search-icon' alt="" />
        <input className='search' type="text" placeholder="Search Twitter" />
       </div>
       <div className="trend-bg">

       <div className="trends-container">
        <div><h3>Trends for you</h3></div>
        <div><img className='settings' src={Settings} alt="" /></div>
       </div>

       <div className="trends">
       <div className='trends-sub'>
       <p>Trends in Turkey</p>
       </div>
       <div><img src={More} className='more' alt="" /></div>
       </div>
       <h4>#SQUID</h4>
       <div className="trend-text">
       <p>2,066 Tweets</p>
       </div> <br />

       <div className="trends">
       <div className='trends-sub'>
       <p>Trends in Turkey</p>
       </div>
       <div><img src={More} className='more' alt="" /></div>
       </div>
       <h4>#SQUID</h4>
       <div className="trend-text">
       <p>2,066 Tweets</p>
       </div> <br />

       <div className="trends">
       <div className='trends-sub'>
       <p>Trends in Turkey</p>
       </div>
       <div><img src={More} className='more' alt="" /></div>
       </div>
       <h4>#SQUID</h4>
       <div className="trend-text">
       <p>2,066 Tweets</p>
       </div> <br />

       <div className="trends">
       <div className='trends-sub'>
       <p>Trends in Turkey</p>
       </div>
       <div><img src={More} className='more' alt="" /></div>
       </div>
       <h4>#SQUID</h4>
       <div className="trend-text">
       <p>2,066 Tweets</p>
       </div> <br />

        <button className='show-more'>Show more</button>
       </div>

       <div className="follow-bg">

        <h3 className='who'>Who to follow</h3><br />

        <div className="follow-item">
          <div>
          <img src={NewYorkIcon} className='profile-img' alt="" />
          </div>
          
          <div>
            <h5 className='follow-name'>The New York Times <span>
            <img src={VerifiedIcon} className='verified-icon' alt="" />
            </span></h5>
            <span className='follow-names'>@nytimes</span>
          </div>
         <div>
         <button className='follow-btn'>Follow</button>
         </div>
        </div>

        <div className="follow-item">
          <div>
          <img src={CnnImage} className='profile-img' alt="" />
          </div>
          
          <div>
            <h5 className='follow-name'>CNN<span>
            <img src={VerifiedIcon} className='verified-icon' alt="" />
            </span></h5>
            <span className='follow-names'>@CNN</span>
          </div>
         <div>
         <button className='follow-btn-cnn'>Follow</button>
         </div>
        </div>


        <div className="follow-item">
          <div>
          <img src={TwitterLogo} className='profile-img' alt="" />
          </div>
          
          <div>
            <h5 className='follow-name'>Twitter <span>
            <img src={VerifiedIcon} className='verified-icon' alt="" />
            </span></h5>
            <span className='follow-names'>Twitter</span>
          </div>
         <div>
         <button className='follow-btn-twitter'>Follow</button>
         </div>
        </div>
        <button className='show-more'>Show more</button>

       </div> <br />
      
<footer>
     
      <div className='lazy-links'>
        <div><a href="#terms">Terms of Service</a></div>
        <div><a href="#privacy">Privacy Policy</a></div>
        <div><a href="#cookie">Cookie Policy</a></div>
      </div>
      <div className='lazy-links'>
        <div><a href="#imprint">Imprint</a></div>
        <div><a href="#ads">Ads</a></div>
        <div><a href="#info">info</a></div>
        <div><a href="more">More...</a></div>
        <div><a href="#copyright">&copy; 2021 Twitter, Inc</a></div>
      </div>
     
</footer>








    </div>
  )
}

export default RightSection