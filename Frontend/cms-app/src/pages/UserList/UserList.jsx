import React, { useState, useEffect } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AddIcon from "@mui/icons-material/Add";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/users/")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching users: ", err));
    }, []);

    const deleteUserhandler = (userId) => {
        const prevUsers = users;
        setUsers(users.filter((user) => user.id !== userId));

        fetch(`http://localhost:8000/api/users/${userId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) throw new Error("Delete failed");
                console.log("User deleted successfully");
            })
            .catch((err) => {
                console.error("Error deleting user: ", err)
                setUsers(prevUsers)
            });
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "first_name",
            headerName: "First Name",
            width: 100,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "last_name",
            headerName: "Last Name",
            width: 140,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "email",
            headerName: "Email",
            width: 280,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "job",
            headerName: "Job",
            width: 200,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "create_date",
            headerName: "Creaeted Date",
            width: 200,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => {
                return (
                    <div>
                        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                            new Date(params.row.created_date),
                        )}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => {
                return (
                    <div className="actions-cell">
                        <Link to={`/userList/${params.row.id}`}>
                            <button className="action-btn btn-edit">
                                <DriveFileRenameOutlineIcon /> Edit
                            </button>
                        </Link>

                        <button onClick={() => deleteUserhandler(params.row.id)} className="action-btn btn-delete">
                            <DeleteIcon />
                        </button>
                    </div>
                );
            },
        },
    ];

    return (
        <>
            <div className="page-header">
                <div>
                    <div className="page-title">Users</div>
                    <div className="breadcrumb">
                        <b>Home</b> &nbsp;›&nbsp; <span className="current">Users</span>
                    </div>
                </div>
                <div className="header-actions">
                    <Link to="/">
                        <button className="btn-primary">
                            <ArrowLeftIcon /> Back To Home
                        </button>
                    </Link>
                    <button className="btn-primary">
                        <AddIcon /> New User
                    </button>
                </div>
            </div>
            <DataGrid
                rows={users}
                columns={columns}
                autoHeight
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
            />
        </>
    );
}
