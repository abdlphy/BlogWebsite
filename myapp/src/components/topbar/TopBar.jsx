import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
    const user=false;
  return (
    <div className="top">
        
        <div className="topleft">
            <i className="topicon fa-brands fa-facebook"></i>
            <i className="topicon fa-brands fa-twitter"></i>
            <i className="topicon fa-brands fa-instagram"></i>
            </div>

        <div className="topright">
            <ul className="toplist">
                
                <li className="toplistitem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                
                <li className="toplistitem">
                <Link className="link" to="/">ABOUT</Link>
                </li>
                
                <li className="toplistitem">
                     <Link className="link" to="/">CONTACT</Link>
                </li>
                
                <li className="toplistitem"> 
                <Link className="link" to="/write">WRITE</Link>
                </li>
                
                <li className="toplistitem">
                    {user && "LOGOUT"}
                </li>
                
            </ul>
        </div>
        
        <div className="topcenter">
            {
                user ? (
                    <img className="topimage" src="https://images.pexels.com/photos/6634027/pexels-photo-6634027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
                ) : (
                    <ul className="toplist">
                        <li className="toplistitem"> 
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>

                        <li className="toplistitem"> 
                             <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    
                    </ul>
                )
            }
                   <i className="topsearchicon fas fa-search"></i>
        </div>
      
    </div>
  )
}
