import React, { useState, useEffect } from "react";
import "./EditProductDetails.css";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProductDetails() {
    const [title, setTitle] = useState("");
    const [stock, setStock] = useState(0);
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");

    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8000/api/products/${params.productId}`)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setStock(data.stock);
                setStatus(data.status);
                setImage(data.image);
            })
            .catch((err) => console.error("Error fetchig produtc detail: ", err));
    }, []);

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const stockHandler = (event) => {
        setStock(event.target.value);
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (title && status && stock) {
            let newProduct = {
                id: params.productId,
                title: title,
                stock: stock,
                status: status == "1" ? 1 : 2,
            };

            fetch(`http://localhost:8000/api/products/${params.productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((err) => console.error("Error fetching PUT product: ", err));

            navigate("/products");
        }
    };

    return (
        <div className="card">
            <div className="card-title">Edit Product Details</div>

            <form className="form-grid" onSubmit={submitHandler}>
                <div className="fields-col">
                    <div className="field">
                        <label>
                            Product Name <span className="req">*</span>
                        </label>
                        <input type="text" value={title} onChange={titleHandler} required placeholder="Title" />
                    </div>

                    <div className="field">
                        <label>
                            Stock <span className="req">*</span>
                        </label>
                        <input type="number" value={stock} onChange={stockHandler} required placeholder="Stock" />
                    </div>

                    <div className="field">
                        <label>
                            Active <span className="req">*</span>
                        </label>
                        <select value={status == "1"  ? "1" : "2"} onChange={statusHandler} required>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-save">
                        Save Changes
                    </button>
                </div>

                <div className="image-col">
                    <label>Product Image</label>
                    <div className="image-box">
                        <div className="image-preview">
                            <img src={image} alt="" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
