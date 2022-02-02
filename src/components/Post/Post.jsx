import React from "react";
import "./Post.css";
import img from './img.jpg';
const Post = () => {
  return (
    <div class="post">
      <div class="userinfo">
        <img
          className="avatar"
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFY8qKZZvI7sw/profile-displayphoto-shrink_100_100/0/1641554536571?e=1649289600&v=beta&t=fg9BoFKkofkMljj4ztVrx8di09Nc3eYrrBils6nLWcw"
          alt=""
        />
        <div class="name">
          <h4 >Prajwal Ladkat</h4>
          <p className="role">Web Developer</p>
        </div>
      </div>
      <p class="content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis unde accusamus, sapiente repellendus cum error, eligendi natus aperiam aliquid earum magnam exercitationem provident soluta. Commodi dolores officia pariatur voluptate nisi?
      </p>
      <img src={img} className="content-img" alt=""/>
    </div>
  );
};

export default Post;
