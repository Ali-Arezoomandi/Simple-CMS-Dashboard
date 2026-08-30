import React from "react";
import "./Features.css";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaymentIcon from '@mui/icons-material/Payment';
import SavingsIcon from '@mui/icons-material/Savings';

export default function Features() {
    return (
        <div className="stats-row">
            <div className="stat-card">
                <div className="stat-icon blue"><SavingsIcon /></div>
                <div className="stat-body">
                    <div className="stat-label">Revenue</div>
                    <div className="stat-value-row">
                        <span className="stat-value">$2,415</span>
                        <span className="stat-delta down">
                            -11.4% <ArrowDownwardIcon />
                        </span>
                    </div>
                    <div className="stat-compare">Compared to last month</div>
                </div>
                <svg className="mini-spark" viewBox="0 0 70 28">
                    <polyline
                        points="0,20 12,10 24,22 36,8 48,18 60,6 70,14"
                        fill="none"
                        stroke="#4f6bfa"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="stat-card">
                <div className="stat-icon orange"><PaymentIcon /></div>
                <div className="stat-body">
                    <div className="stat-label">Cost</div>
                    <div className="stat-value-row">
                        <span className="stat-value">$2,415</span>
                        <span className="stat-delta up">
                            +2.4% <ArrowUpwardIcon />
                        </span>
                    </div>
                    <div className="stat-compare">Compared to last month</div>
                </div>
                <svg className="mini-spark" viewBox="0 0 70 28">
                    <polyline
                        points="0,18 12,22 24,10 36,16 48,6 60,14 70,4"
                        fill="none"
                        stroke="#f6a821"
                        strokeWidth="2"
                    />
                </svg>
            </div>

            <div className="stat-card">
                <div className="stat-icon green"><MonetizationOnIcon /></div>
                <div className="stat-body">
                    <div className="stat-label">Sales</div>
                    <div className="stat-value-row">
                        <span className="stat-value">$2,415</span>
                        <span className="stat-delta down">
                            -1.4% <ArrowDownwardIcon />
                        </span>
                    </div>
                    <div className="stat-compare">Compared to last month</div>
                </div>
                <svg className="mini-spark" viewBox="0 0 70 28">
                    <polyline
                        points="0,22 12,14 24,18 36,6 48,12 60,4 70,10"
                        fill="none"
                        stroke="#17c98d"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        </div>
    );
}
