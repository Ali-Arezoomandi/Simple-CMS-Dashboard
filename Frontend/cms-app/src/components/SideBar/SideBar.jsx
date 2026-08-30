import React from "react";
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import EmailIcon from '@mui/icons-material/Email';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';


import "./SideBar.css";
import { NavLink } from "react-router-dom"

export default function SideBar() {
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    MyCMS
                </div>

                <div className="nav-label">DASHBOARD</div>
                <NavLink to="/" className={link => link.isActive ? 'nav-item active' : 'nav-item'}>
                    <span className="icon">< LineStyleIcon /></span> Home
                </NavLink>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><TimelineIcon /></span> Analytics
                </a>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><TrendingUpIcon /></span> Sales
                </a>

                <div className="nav-label">QUICK MENU</div>
                <NavLink to="/userList" className={link => link.isActive ? 'nav-item active' : 'nav-item'}>
                    <span className="icon"><PermIdentityIcon /></span> Users
                </NavLink>
                <NavLink to="/newUser" className={link => link.isActive ? 'nav-item active' : 'nav-item'}>
                    <span className="icon"><PermIdentityIcon /></span> New User
                </NavLink>
                <NavLink to="/products" className={link => link.isActive ? 'nav-item active' : 'nav-item'}>
                    <span className="icon"><StorefrontIcon /></span> Products
                </NavLink>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><AttachMoneyIcon /></span> Transactions
                </a>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><BarChartIcon /></span> Reports
                </a>

                <div className="nav-label">NOTIFICATIONS</div>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><EmailIcon /></span> Mail
                </a>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><DynamicFeedIcon /></span> Feedback
                </a>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><ChatBubbleIcon /></span> Messages
                </a>

                <div className="nav-label">STAFF</div>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><WorkIcon /></span> Manage
                </a>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><TimelineIcon /></span> Analytics
                </a>
                <a to="" className="nav-item" href="#">
                    <span className="icon"><ReportIcon /></span> Reports
                </a>
            </aside>
        </>
    );
}
