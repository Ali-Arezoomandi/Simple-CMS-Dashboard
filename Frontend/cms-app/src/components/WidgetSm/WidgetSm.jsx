import React from "react";
import "./WidgetSm.css";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm(props) {
    return (
        <div className="member-row" key={props.id}>
            <div className="member-info">
                <div className="member-avatar">
                    <PersonIcon />
                </div>
                <div>
                    <div className="member-name">
                        {props.first_name} {props.last_name}
                    </div>
                    <div className="member-role">{props.job}</div>
                </div>
            </div>
            <div className="add-btn">
                <VisibilityIcon />
            </div>
        </div>
    );
}
