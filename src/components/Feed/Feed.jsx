import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import "./Feed.css"
import FeedTopPanel from '../Feedtoppanel/FeedTopPanel';
import FeedContent from '../Feedcontent/FeedContent';
import LinkedinNews from '../LinkedinNews/LinkedinNews';
import { useEffect } from 'react';
import Popup from '../Modal/Popup';


const Feed = ({isOpen, setIsOpen, handleIsOpen}) => {
    

    return (
        <div class="feed">
            <div class="feed-top">
                <div class="img">
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFY8qKZZvI7sw/profile-displayphoto-shrink_100_100/0/1641554536571?e=1649289600&v=beta&t=fg9BoFKkofkMljj4ztVrx8di09Nc3eYrrBils6nLWcw" alt=""/>
                </div>
                <button onClick={handleIsOpen}  className="feed-top-input" placeholder='Start Post'>Start Post</button>
            </div>
            <FeedTopPanel />
            <div class="feed-bottom">
                <FeedContent />
            </div>
        </div>
  );
};

export default Feed;
