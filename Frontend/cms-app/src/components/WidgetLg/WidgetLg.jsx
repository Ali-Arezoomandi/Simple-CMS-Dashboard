import React from "react";
import "../WidgetSm/WidgetSm.css";
import Inventory2Icon from '@mui/icons-material/Inventory2';

export default function WidgetLg(props) {
    const Button = ({ type }) => {
        return <span className={`status-pill ` + type}>{type}</span>;
    };

    return (
        <tr key={props.id}>
            <td className="cust-cell">
                <div className="member-avatar">
                    <Inventory2Icon />
                </div>
                {props.title}
            </td>
            <td>{new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(props.created_at))}</td>
            <td>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                }).format(props.price)}
            </td>
            <td>{props.status === 1 ? <Button type="Active" /> : <Button type="Not-Active" />}</td>
        </tr>
    );
}
