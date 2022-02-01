import React from 'react';
import "./Avatar.css"

const Avatar = () => {
    const imageUrl = 'https://media-exp1.licdn.com/dms/image/C4D03AQFY8qKZZvI7sw/profile-displayphoto-shrink_100_100/0/1641554536571?e=1649289600&v=beta&t=fg9BoFKkofkMljj4ztVrx8di09Nc3eYrrBils6nLWcw'
    return (
        <div class="avatar">
            <img src={imageUrl} alt="" />
        </div>
    );
};

export default Avatar;
