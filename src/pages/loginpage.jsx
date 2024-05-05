/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Col, Input, Row, Button, FormGroup, } from 'reactstrap';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const initialUser = { password: '', identifier: '' };
const LoginPage = () => {
    const {user, setUser} = useState(initialUser);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }))
    };

    const handleLogin = async () => {
        const url = "http://localhost:1337/api/auth/local";
        try {
            if (user.identifier && user.password) {
                const res = await axios.post(url, user);
                console.log({res});
            }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true,
            });
        }
    };

  return (
    <Row>
        <Col>
            <div>
                <h2>Login:</h2>
                <FormGroup>
                    <Input 
                        type="email" 
                        name="identifier" 
                        value={user.identifier} 
                        placeholder="Enter your Email" 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        placeholder="Enter your Password" 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <Button color="primary" onClick={handleLogin}>Login</Button>
                <h6>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </h6>
            </div>
        </Col>
    </Row>
  )
}

export default LoginPage
