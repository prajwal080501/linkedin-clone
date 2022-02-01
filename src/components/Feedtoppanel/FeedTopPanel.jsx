import React from 'react';
import "./FeedTopPanel.css"
import { BsCameraVideo  } from 'react-icons/bs';
import { MdOutlineArticle } from 'react-icons/md';
import { HiOutlinePhotograph } from 'react-icons/hi'
import {AiOutlineCalendar} from 'react-icons/ai'

const FeedTopPanel = () => {
    return (
        <div class="feed-top-panel">
        <div  title="Photos" className="feed-top-panel-item" >
            <HiOutlinePhotograph className='icon-1' />
            <p>Photos</p>
        </div>
        <div title="Videos"  className="feed-top-panel-item">
            <BsCameraVideo className='icon-2'  />
            <p>Video</p>
        </div >
        <div title="Events"  className="feed-top-panel-item">
            <AiOutlineCalendar className='icon-3'  />
            <p>Event</p>
        </div>
        <div title="Write Article"  className="feed-top-panel-item">
            <MdOutlineArticle className='icon-4'  />
            <p>Write Article</p>
        </div>
    </div>
  );
};

export default FeedTopPanel;
