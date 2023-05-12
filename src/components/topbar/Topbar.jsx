import React from 'react';
import "./topbar.css";
import img from "../../assets/img/img.jpg";
import { Settings, Language, NotificationsNone } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Portal</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone  classname="topbarIconBadge"/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language  classname="topbarIconBadge"/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings  classname="topbarIconBadge"/>
                </div>
                <img src= {img} alt="" className="topAvatar" />

            </div>
        </div>
    </div>
  )
}
