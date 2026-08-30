import React from "react";
import "./Chart.css";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function Chart({ title, data, datakey, grid }) {
    return (
        <div className="chart-card">
            <div className="chart-head">
                <div>
                    <div className="chart-title">{title}</div>
                    <div className="chart-legend">
                        <span className="legend-dot"></span> Sales ($)
                    </div>
                </div>
                <div className="select-pill">This Year ▾</div>
            </div>
            <ResponsiveContainer width="100%" aspect={5}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#3c53d6" />
                    {/* <YAxis dataKey="Sale" stroke="#3c53d6" /> */}
                    <Line type="monotone" dataKey={datakey} stroke="#3c53d6" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
