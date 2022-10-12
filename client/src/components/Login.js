import React from 'react'
import './css/Form.css'
import { Typography } from "@mui/material";




const Login = () => {
    return (
        <>
            <div className="form-wrapper">
                <div className="header">
                    <Typography variant="overline">
                        <h1>Login</h1>
                    </Typography>
                </div>
                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            Email:
                        </label>
                        <input type="text" name="name" id="name" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">
                            Password:
                        </label>
                        <input type="text" name="name" id="name" autoComplete="off" />
                    </div>
                    <div className="form-group">
                        <input type="submit" name="login" id="login" className="form-submit" value = "Login"/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;