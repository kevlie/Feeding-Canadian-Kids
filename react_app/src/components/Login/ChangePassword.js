import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import "./ChangePassword.css";
const hash = require("object-hash");

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isLoggedIn: false,
            partnerType: "",
            isAdmin: "",
            password: "",
            oldPassword: "",
            confirmPassword: "",
            message: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    setLoginStatus() {
        fetch(express_server + "/api/auth/validate-login", {
            method: "get",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(response => {
            if (response.status === 200 || response.status === 304) {
                response.json().then(resJSON => {
                    if (resJSON.email) {
                        let state = {
                            isLoggedIn: true,
                            email: resJSON.email,
                            partnerType: resJSON.partnerType,
                            isAdmin: resJSON.isAdmin
                        };
                        this.setState(state);
                    } else {
                    }
                });
            }
        });
    }

    changePassword(oldPassword, newPassword) {
        let hashedOldPassword = hash(oldPassword);
        let hashedNewPassword = hash(newPassword);
        fetch(express_server + "/api/auth/change-password", {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                oldPassword: hashedOldPassword,
                newPassword: hashedNewPassword
            })
        }).then(response => {
            if (response.status === 200) {
                this.setState({
                    message: "Password changed successfully"
                });
            } else {
                this.setState({
                    message: "Failed to change password. You may have entered the wrong old password."
                });
            }
        })
    }

    render() {
        return (
            <div className="changepasswordCard">
                <div className="changepasswordHeader">
                    <h4>
                        Change Password
                    </h4>
                </div>
                <div className="ChangePassword">
                    <form>
                        <FormGroup bsSize="large" controlId="oldPassword">
                            <FormLabel>Old Password</FormLabel>
                            <FormControl
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.oldPassword}
                            />
                        </FormGroup>
                        <hr />
                        <FormGroup bsSize="large" controlId="password">
                            <FormLabel>New Password</FormLabel>
                            <FormControl
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup bsSize="large" controlId="confirmPassword">
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl
                                type="password"
                                onChange={this.handleChange}
                                value={this.state.confirmPassword}
                            />
                        </FormGroup>
                        <div className="changepasswordButton">
                            <Button
                                className="cpbutton"
                                onClick={e => {
                                    if (this.state.confirmPassword === this.state.password) {
                                        this.changePassword(this.state.oldPassword, this.state.password);
                                    } else {
                                        this.setState({
                                            message: "New passwords do not match."
                                        });
                                    }
                                }}
                            >
                                Submit
                            </Button>
                        </div>
                        <p className="error">{this.state.message}</p>
                    </form>
                </div>
            </div>
        );
    }
}

export default ChangePassword;
