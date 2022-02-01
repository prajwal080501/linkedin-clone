import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Sidebar.css";

const Sidebar = () => {
  const recentItem = (topic) => {
    return (
      <div className="sidebar-recentitem">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div class="sidebar-top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5616AQFTQydJHgCwaQ/profile-displaybackgroundimage-shrink_350_1400/0/1625205892751?e=1649289600&v=beta&t=XnsGkNqLBlH6asfEUnuuZdln8306k_m-QvSf9xzY12U"
          alt=""
          class="bgimg"
        />
        <Avatar className="avatar" />
        <h2 class="namw">Prajwal Ladkat</h2>
        {/* <p class="email">praju.ladkat@gmail.com</p> */}
        <h3 class="role">Web Developer</h3>
      </div>
      <div className="sidebar-stats">
        <div class="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statnumber">255</p>
        </div>
        <div className="sidebar-stat">
          <p>Post views</p>
          <p className="sidebar-statnumber">255</p>
        </div>
      </div>
      <div className="sidebar-bottom">
              <p className="sidebar-bottom-title">Recent</p>
              <div style={{borderBottom: '1px solid lightgray', padding: '5px', margin: '10px'}}></div>
        {recentItem("reactjs")}
        {recentItem("java")}
        {recentItem("datascience")}
        {recentItem("python")}
        {recentItem("js")}
        {recentItem("os")}
      </div>
    </div>
  );
};

export default Sidebar;
