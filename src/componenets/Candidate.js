import React from "react";
import { Button,Form } from 'react-bootstrap';
export default function Candidate() {
    return (
        <div classname="container" style={{height:"100%",width:"100%",display:"flex",justifyContent:"center"}}>
        <div className="wrapper" style={{position:"center",backgroundColor:"yellowgreen",display:"flex",justifyContent:"center",padding:"50px"}}>
        <Form>
            <h1 style={{display:"flex",justifyContent:"center"}}>Login Form</h1>
            <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="username" placeholder="Enter your username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div style={{display:"flex",justifyContent:"center"}}>

        <Button variant="primary"  type="submit">
          Submit
        </Button>
        </div>
        <div style={{marginTop:"10px"}}>
        <a href="#">Create a new account? Register here</a>
        </div>
      </Form>
      </div>
      </div>
    )
};

