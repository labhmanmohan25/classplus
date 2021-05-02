import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, FormControl, FormLabel, Label, Input } from 'reactstrap'

function Login() {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center" style={{ marginTop: "100px" }}>
            <div className="d-flex flex-column">
                <div>
                    <img src="./images/logo.jpg" alt="" />
                </div>
                <h4 >Enter Class</h4>

                <Form className="login-form" style={{ maxWidth: "300px" }}>
                    <FormGroup>
                        <Input type="name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="tel" placeholder="Mobile Number" />
                    </FormGroup>
                    <FormGroup>
                        <Link to={"/verify"} className="btn btn-primary">Enter</Link>
                    </FormGroup>
                </Form>

                <p>not registered yet? <Link to={"/register"}><b>Register Now</b></Link></p>

            </div>

            <div className="d-flex">
                <img src="./images/robot.jpg" alt="" />
            </div>

        </div>
    )
}

export default Login
