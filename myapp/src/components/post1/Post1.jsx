import React from 'react'
import "./post1.css"
import { Link } from 'react-router-dom'

export default function Post1() {
  return (
    <div className="post">
      <Link className="link" to="/post/:postId">
      <img className="postimg" src="https://images.pexels.com/photos/13766882/pexels-photo-13766882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </Link>
        
      <div className="postinfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="posttitle">Lorem, ipsum dolor sit amet consectetur </span>
        <hr />
        <span className="postdate">1 hour ago</span>
        <p className="postdesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id hic debitis enim. Laboriosam quos ut omnis recusandae similique exercitationem! Provident veritatis, autem aliquid eveniet molestiae magnam dolor nam id corrupti.</p>
      </div>
    </div>
  )
}
