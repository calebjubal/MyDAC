/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Col, Input, Row, Button, FormGroup, } from 'reactstrap';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


const initialUser = { email: '', username: '', password: '' };
const SignupPage = () => {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();
    const signUp = async () => {
        try {
            const url = "http://localhost:1337/api/auth/local/signup";
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user);
                if (res) {
                    setUser(initialUser);
                    navigate("/login");
                }
                console.log({res});
            }
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true,
            });
        }
    };
    const handleUserChange = ({target}) => {
        const {name, value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value
        }))
    }
  return (
    <Row>
        <Col>
            <div>
                <h2>Sign Up:</h2>
                <FormGroup>
                    <Input 
                        type="text" 
                        name="username" 
                        value={user.username} 
                        placeholder="Enter your Full Name" 
                        onChange={handleUserChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        placeholder="Enter your Email" 
                        onChange={handleUserChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        placeholder="Enter your Password" 
                        onChange={handleUserChange} 
                    />
                </FormGroup>
                <Button color="primary" onClick={signUp}>Sign up</Button>
                <h6>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </h6>
            </div>
        </Col>
    </Row>
  )
}

export default SignupPage
