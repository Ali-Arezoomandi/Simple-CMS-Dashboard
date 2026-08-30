import React from "react";
import "./UserInfo.css";
import PersonIcon from "@mui/icons-material/Person";


export default function UserInfo(props) {
    return (
        <div className="card">
            <div className="info-head">
                <div className="info-icon">
                    <PersonIcon />
                </div>
                <div className="card-title" style={{ margin: 0 }}>
                    User Information
                </div>
            </div>
            <div className="info-list">
                <div className="info-row">
                    <span className="k">ID:</span>
                    <span className="v">{props.id}</span>
                </div>
                <div className="info-row">
                    <span className="k">First Name:</span>
                    <span className="v">{props.first_name}</span>
                </div>
                <div className="info-row">
                    <span className="k">Last Name</span>
                    <span className="v">{props.last_name}</span>
                </div>
                <div className="info-row">
                    <span className="k">Email</span>
                    <span className="pill v">{props.email}</span>
                </div>
                <div className="info-row">
                    <span className="k">Job:</span>
                    {props.job}
                </div>
            </div>
        </div>
    );
}
