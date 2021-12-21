import React from "react";


export class Signup extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="container">
                <div className="signuptop">Sign up</div>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="register">
                    <button type="button" className="btn">
                        Register
                    </button>
                </div>
            </div>
        )
    }
}