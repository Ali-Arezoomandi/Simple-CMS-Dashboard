import React from "react";
import "./ProductInfo.css";
import InventoryIcon from "@mui/icons-material/Inventory";


export default function ProductInfo(props) {
    return (
        <div className="card">
            <div className="info-head">
                <div className="info-icon">
                    <InventoryIcon />
                </div>
                <div className="card-title" style={{ margin: 0 }}>
                    Product Information
                </div>
            </div>
            <div className="info-list">
                <div className="info-row">
                    <span className="k">ID:</span>
                    <span className="v">{props.id}</span>
                </div>
                <div className="info-row">
                    <span className="k">Name:</span>
                    <span className="v">{props.title}</span>
                </div>
                <div className="info-row">
                    <span className="k">Sales:</span>
                    <span className="v">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        }).format(props.price)}
                    </span>
                </div>
                <div className="info-row">
                    <span className="k">Stock:</span>
                    <span className="pill v">{props.stock}</span>
                </div>
                <div className="info-row">
                    <span className="k">Active:</span>
                    {props.status === 1 ? (
                        <span className="pill pill-yes">Yes</span>
                    ) : (
                        <span className="pill pill-no">No</span>
                    )}
                </div>
            </div>
        </div>
    );
}
