// Imports
import './Signup.css'
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;



const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleInput = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // check to make sure passwords match
        if (password === confirmPassword && password.length >= 8) {
            const payload = { name, email, password };
            let url = `${REACT_APP_SERVER_URL}/api/users/signup`;
            axios.post(url, payload)
                .then(response => {
                    console.log(response.data);
                    setRedirect(true);
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            if (!password === confirmPassword) {
                alert('Password and Confirm Password need to match. Please try again...');
            } else {
                alert('Password needs to be at least 8 characters or more. Please try again...');
            }
        }
    }

    if (redirect) return <Redirect to='/login' />

    return (

        <div className="signup__wrapper row pt-5 pb-5">
            <div className="signup__content col-md-7 offset-md-3 my-5">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleInput} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleInput} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handleInput} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleInput} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup;