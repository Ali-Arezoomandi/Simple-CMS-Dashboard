import React from "react";
import "./Topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
    return (
        <>
            <div className="topbar">
                <div className="icon-btn"><SearchIcon /></div>
                <div className="icon-btn">
                    <NotificationsIcon /><span className="badge">2</span>
                </div>
                <div className="icon-btn">
                    <LanguageIcon /><span className="badge">2</span>
                </div>
                <div className="icon-btn">< SettingsIcon /></div>
                <div className="avatar-top">< PersonIcon /></div>
            </div>
        </>
    );
}
