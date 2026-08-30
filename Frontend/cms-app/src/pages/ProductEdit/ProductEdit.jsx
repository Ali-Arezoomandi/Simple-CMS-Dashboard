import React, { useState, useEffect } from "react";
import "./ProductEdit.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Chart from "../../components/Chart/Chart";
import { productsData } from "../../datas";
import { Link, useParams } from "react-router-dom";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import EditProductDetails from "../../components/EditProductDetails/EditProductDetails";

export default function ProductEdit() {
    const [product, setProduct] = useState({});

    let params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/api/products/${params.productId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
            })
            .catch((err) => console.error("Error fetchig produtc detail: ", err));
    }, [params.productId]);

    return (
        <>
            <div className="page-header">
                <div>
                    <div className="page-title">Edit Product</div>
                    <div className="breadcrumb">
                        <b>Home</b> &nbsp;›&nbsp; <b>Products</b> &nbsp;›&nbsp; <span>Edit Product</span>
                    </div>
                </div>
                <div className="header-actions">
                    <Link to="/products">
                        <button className="btn-back">
                            <ArrowLeftIcon /> Back to Products
                        </button>
                    </Link>
                </div>
            </div>

            <div className="top-row">
                <div className="card">
                    <Chart grid title="Sale In Month" data={productsData} datakey="sales" />
                </div>
                <ProductInfo {...product} />
            </div>

            <EditProductDetails {...product} />
        </>
    );
}
