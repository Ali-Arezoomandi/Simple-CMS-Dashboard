import React, { useState, useEffect } from "react";
import "./Products.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/products/")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching product: ", err));
    }, []);

    const deleteProductshandler = (productId) => {
        const prevProducts = products;
        setProducts(products.filter((product) => product.id !== productId));

        fetch(`http://localhost:8000/api/products/${productId}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (!response.ok) throw new Error("Delete failed");
                console.log("Product deleted successfully");
            })
            .catch((err) => {
                console.error("Error deleting product: ", err)
                setProducts(prevProducts)
            });
    };

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 120,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "title",
            headerName: "Title",
            width: 160,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "cost",
            headerName: "Price",
            width: 190,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => {
                return (
                    <div>
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }).format(params.row.price)}
                    </div>
                );
            },
        },
        {
            field: "stock",
            headerName: "Stock",
            width: 120,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "created_date",
            headerName: "Created Date",
            width: 180,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => {
                return (
                    <div>
                        {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
                            new Date(params.row.created_at),
                        )}
                    </div>
                );
            },
        },
        {
            field: "status",
            headerName: "Status",
            width: 250,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => {
                return params.row.status === 1 ? <span>Active</span> : <span>Not-Active</span>;
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
                        <Link to={`/products/${params.row.id}`}>
                            <button className="action-btn btn-edit">
                                <DriveFileRenameOutlineIcon /> Edit
                            </button>
                        </Link>

                        <button onClick={() => deleteProductshandler(params.row.id)} className="action-btn btn-delete">
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
                    <div className="page-title">Products</div>
                    <div className="breadcrumb">
                        <b>Home</b> &nbsp;›&nbsp; <span className="current">Products</span>
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
                rows={products}
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
