import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
         
         <div className="sidebaritem">
        <span className="sidebartitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/6431572/pexels-photo-6431572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarlist">
          <li className="sidebarlistitem">Life</li>
          <li className="sidebarlistitem"> Music</li>
          <li className="sidebarlistitem">Sport</li>
          <li className="sidebarlistitem">Style</li>
          <li className="sidebarlistitem">Tech</li>
          <li className="sidebarlistitem">Cinema</li>
        </ul>
      </div>
       
      <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="sidebaricon fab fa-facebook-square"></i>
          <i className="sidebaricon fab fa-instagram-square"></i>
          <i className="sidebaricon fab fa-pinterest-square"></i>
          <i className="sidebaricon fab fa-twitter-square"></i>
        </div>
      </div>
     
     </div>
  )
}
