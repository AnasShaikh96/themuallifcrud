import React, { useState } from "react";

function Login() {
    const [user, SetUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user === "anas" && password === "mifrah") {
            window.location.href = '/quotes'
        } else {
            alert('incorrect password')
        }


    };

    return (
        <>
            <div className="login-wrapper">
                <div className="login-card">
                    <h4 className="text-center my-3">Login</h4>

                    <form className="d-flex flex-column" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => SetUser(e.target.value)}
                                autoComplete="false"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Password</label>
                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-end">
                            <button className="btn btn-dark" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
