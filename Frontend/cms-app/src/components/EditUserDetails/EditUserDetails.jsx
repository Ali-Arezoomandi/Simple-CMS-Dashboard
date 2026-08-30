import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditUserDetails.css";

export default function EditUserDetails() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");

    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8000/api/users/${params.userId}`)
            .then((response) => response.json())
            .then((data) => {
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setJob(data.job);
            })
            .catch((err) => console.error("Error fetchig user detail: ", err));
    }, []);

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const jobHandler = (event) => {
        setJob(event.target.value);
    };

    const submitHandler = async (event) => {
        event.preventDefault();

        if (firstName && lastName && email && job) {
            let newUser = {
                id: params.userId,
                first_name: firstName,
                last_name: lastName,
                email: email,
                job: job,
            };

            fetch(`http://localhost:8000/api/users/${params.userId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((err) => console.error("Error fetching PUT user: ", err));

            navigate("/userList");
        }
    };

    return (
        <div className="card">
            <div className="card-title">Edit User Details</div>

            <form className="form-gridx" onSubmit={submitHandler}>
                <div className="fields-col">
                    <div className="field">
                        <label>
                            First Name <span className="req">*</span>
                        </label>
                        <input type="text" value={firstName} onChange={firstNameHandler} required placeholder="First Name" />
                    </div>

                    <div className="field">
                        <label>
                            Last Name <span className="req">*</span>
                        </label>
                        <input type="text" value={lastName} onChange={lastNameHandler} required placeholder="Last Name" />
                    </div>

                    <div className="field">
                        <label>
                            Email <span className="req">*</span>
                        </label>
                        <input type="text" value={email} onChange={emailHandler} required placeholder="Email" />
                    </div>

                    <div className="field">
                        <label>
                            Job <span className="req">*</span>
                        </label>
                        <input type="text" value={job} onChange={jobHandler} required placeholder="Job" />
                    </div>

                    <button type="submit" className="btn-save">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
