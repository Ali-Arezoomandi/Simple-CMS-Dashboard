import React, { useState, useEffect } from "react";
import "./UserEdit.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { Link, useParams } from "react-router-dom";
import UserInfo from "../../components/UserInfo/UserInfo";
import EditUserDetails from "../../components/EditUserDetails/EditUserDetails";

export default function UserEdit() {
    const [user, setUser] = useState({});

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/users/${params.userId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setUser(data);
            })
            .catch((err) => console.error("Error fetchig user detail: ", err));
    }, [params.userId]);

    return (
        <>
            <div className="page-header">
                <div>
                    <div className="page-title">Edit User</div>
                    <div className="breadcrumb">
                        <b>Home</b> &nbsp;›&nbsp; <b>User</b> &nbsp;›&nbsp; <span>Edit User</span>
                    </div>
                </div>
                <div className="header-actions">
                    <Link to="/userList">
                        <button className="btn-back">
                            <ArrowLeftIcon /> Back to Users
                        </button>
                    </Link>
                </div>
            </div>

            <div className="top-row">
                <EditUserDetails />
                <UserInfo {...user} />
            </div>
        </>
    );
}
