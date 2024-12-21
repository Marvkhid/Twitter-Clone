import React from 'react'
import './HomeSection.css'
import TimelinePropIcon from '../../assets/TimelineProp.png';
import ProfilePicture from '../../assets/ProfilePicture.jpg';
import MediaIcon from '../../assets/Media.png';
import GifIcon from '../../assets/Gif.png';
import PollIcon from '../../assets/Poll.png';
import EmojiIcon from '../../assets/Emoji.png';
import ScheduleIcon from '../../assets/Schedule.png';
import CnnImage from '../../assets/CnnImage.png'
import VerifiedIcon from '../../assets/Verified.png';
import ReplyIcon from '../../assets/Reply.png';
import RetweetIcon from '../../assets/Retweet.png';
import ReactIcon from '../../assets/React.png';
import ShareIcon from '../../assets/Share.png';
import NewYorkIcon from '../../assets/NewYork.png';
import LeafImage from '../../assets/LeafImage.png';
import TwitterLogo from '../../assets/TwitterLogo.png';


const HomeSection = () => {
  return (
    <div className='homeSection'>
         <div className='homey'>
            <div className="home">Home</div>
            <div className="timeline-prop"><img src={TimelinePropIcon} alt="" /></div>   
        </div>   
        
       <div className="pp">
       <div className="profile-picture">
                      <img
                        src={ProfilePicture}
                        className="profilePicture" alt="Marvel Aden"/>
                    </div>
                     <input type="text" className='status' placeholder='Whats happening?' />
                   
       </div>
       <div className='status-img'>
        <div>
        <img src={MediaIcon} className='status-imgs' alt="" />
        <img src={GifIcon} className='status-imgs' alt="" />
        <img src={PollIcon} className='status-imgs' alt="" />
        <img src={EmojiIcon} className='status-imgs' alt="" />
        <img src={ScheduleIcon} className='status-imgs' alt="" />
        </div>
        <div> 
            <button className='tweet'>Tweet</button>
        </div>
       </div>

        <div className="cnn-tweet">
            <div>
                <img src={CnnImage} alt="" />
            </div>
            <div className="cnn-tweet-info">
              <span className='tweet-name'>CNN
                <img src={VerifiedIcon} className='verified-icon' alt="" />
              </span>
              <span className='tweet-handle'>@CNN . 7m</span>
                <p>President Joe Biden touted a new agreement reached with the</p>
                <p>European Union to ease Trump-era tariffs on aluminium and steel as a</p>
                <p>"major breakthrough" that would serve to both strengthen the US steel</p>
                <p>industry and combat the global climate crisis.</p>
                <div className="tweet-engagements">
                  <div className="action">
                    <img src={ReplyIcon} alt="" />
                    <span>57</span>
                  </div>
                  <div className="action">
                    <img src={RetweetIcon}  alt="" />
                    <span>144</span>
                  </div>
                  <div className="action">
                    <img src={ReactIcon}  alt="" />
                    <span>174</span>
                  </div>
                  <div className="action">
                    <img src={ShareIcon}  alt="" />
                  </div>
                </div>
            </div>
        </div>
        


        <div className="cnn-tweet">
        <div><img src={NewYorkIcon} alt="" /></div>
            <div className="cnn-tweet-info">
              <span className='tweet-name'>The New York Times
                <img src={VerifiedIcon} className='verified-icon' alt="" />
              </span>
              <span className='tweet-handle'>@nytimes . 2h</span>
                <p>Gardening boomed during the pandemic. Six Black writers share how it</p>
                <p>has helped them re-establish, and reimagine, a connection to</p>
                <p>cultivation and the land.</p>
                <img className='leaf-image' src={LeafImage} alt="" />
                <div className="tweet-engagements">
                  <div className="action">
                    <img src={ReplyIcon} alt="" />
                    <span>19</span>
                  </div>
                  <div className="action">
                    <img src={RetweetIcon}  alt="" />
                    <span>48</span>
                  </div>
                  <div className="action">
                    <img src={ReactIcon}  alt="" />
                    <span>482</span>
                  </div>
                  <div className="action">
                    <img src={ShareIcon}  alt="" />
                  </div>
                </div>
            </div>
        </div>

                
        <div className="cnn-tweet">
            <div>
                <img src={TwitterLogo} alt="" />
            </div>
            <div className="cnn-tweet-info">
              <span className='tweet-name'>Twitter
                <img src={VerifiedIcon} className='verified-icon' alt="" />
              </span>
              <span className='tweet-handle'>@Twitter . Oct 29</span>
              <div>
              <p>BIG NEWS lol jk still Twitter</p>
              </div>
              
                <div className="tweet-engagement">
                  <div className="actions">
                    <img src={ReplyIcon} alt="" />
                    <span>6.8K</span>
                  </div>
                  <div className="actions">
                    <img src={RetweetIcon}  alt="" />
                    <span>36.6K</span>
                  </div>
                  <div className="actions">
                    <img src={ReactIcon}  alt="" />
                    <span>267.1K</span>
                  </div>
                  <div className="actions">
                    <img src={ShareIcon}  alt="" />
                  </div>
                </div>
            </div>
        </div>
        

        <div className="cnn-tweet">
            <div>
                <img src={TwitterLogo} alt="" />
            </div>
            <div className="cnn-tweet-info">
              <span className='tweet-name'>Twitter
                <img src={VerifiedIcon} className='verified-icon' alt="" />
              </span>
              <span className='tweet-handle'>@Twitter . Oct 4</span>
              <div>
              <p>hello literally everyone</p>
              </div>
              
                <div className="tweet-engagement">
                  <div className="actions">
                    <img src={ReplyIcon} alt="" />
                    <span>118.7K</span>
                  </div>
                  <div className="actions">
                    <img src={RetweetIcon}  alt="" />
                    <span>785.4K</span>
                  </div>
                  <div className="actions">
                    <img src={ReactIcon}  alt="" />
                    <span>3.3M</span>
                  </div>
                  <div className="actions">
                    <img src={ShareIcon}  alt="" />
                  </div>
                </div>
            </div>
        </div>
        

        <div className="twitter">
            <div>
                <img src={TwitterLogo} alt="" />
            </div>
            <div className="cnn-tweet-info">
              <span className='tweet-name'>Twitter
                <img src={VerifiedIcon} className='verified-icon' alt="" />
              </span>
              <span className='tweet-handle'>@Twitter . Oct 4</span>
                <p>hello literally everyone</p>
        </div>
        </div>


        




    </div>
  )
}

export default HomeSection