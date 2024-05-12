import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (store.access_token)  navigate('/logged-in')
    }, [store.access_token])

    function signup(event) {
        event.preventDefault();
        actions.createUser(username, email, password);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div className="card">
            <h2>Sign Up</h2>
            <form onSubmit={signup}>
                <div className="form-group">
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;