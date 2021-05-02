import React from 'react'
import { Link } from 'react-router-dom';
import {Button,Form,FormGroup,FormControl,FormLabel,Label,Input} from 'reactstrap'

function Register() {
    return (
        <div className="d-flex flex-row justify-content-center align-items-center" style={{ marginTop: "100px" }}>
        <div className="d-flex flex-column">
            <div>
                <img src="./images/logo.jpg" alt="" />
            </div>
            <h4 >Register</h4>

            <Form className="login-form" style={{ maxWidth: "300px" }}>
                <FormGroup>
                    <Input type="name" placeholder="Name" />
                </FormGroup>
                <FormGroup>
                    <Input type="tel" placeholder="Mobile Number" />
                </FormGroup>
                <FormGroup>
                    <Link to={"/check"} className="btn btn-primary">Next</Link>
                </FormGroup>
            </Form>

        </div>

        <div className="d-flex">
            <img src="./images/robot.jpg" alt="" />
        </div>

        {/* <p>not registered yet? <b>Register Now</b></p> */}

    </div>
    )
}

export default Register
