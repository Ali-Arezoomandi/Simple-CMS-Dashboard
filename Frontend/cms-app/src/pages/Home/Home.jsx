import React, { useState, useEffect } from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/users/")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error("Error fetching useres: ", err));

        fetch("http://localhost:8000/api/products/")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products: ", err));
    }, []);

    return (
        <div>
            <Features />
            <Chart grid title="Month Sale" data={xAxisData} datakey="Sale" />
            <div className="bottom-row">
                <div className="panel">
                    <div className="panel-title">All Members</div>
                    {users.slice(0, 4).map((user) => (
                        <WidgetSm key={user.id} {...user} />
                    ))}
                    <Link className="view-all" to="/userList">
                        View All User ›
                    </Link>
                </div>

                <div className="panel">
                    <div className="panel-title">All Products</div>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.slice(0, 3).map((product) => (
                                <WidgetLg key={product.id} {...product} />
                            ))}
                        </tbody>
                    </table>
                    <Link className="view-all" to="/products">
                        View All Product ›
                    </Link>
                </div>
            </div>
        </div>
    );
}
