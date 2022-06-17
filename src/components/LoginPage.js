import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

function LoginPage() {
    const [userEmail, setuserEmail]=useState('');
    const [userPassword, setUserPassword]=useState('');
    const [invalidCredentials, setInvalidCredentials] = useState(false)

    const handleEmailchange=(e)=>{
        setuserEmail(e.target.value);
    }
    const handlePasswordchange=(e)=>{
        setUserPassword(e.target.value);
    }
    const navigate=useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        try { 
          axios.post('/verify-user', {
            useremail: userEmail,
            userpassword: userPassword
          })
            .then(function (response) {
              if(response.data.status==="found"){
                
                localStorage.setItem("uid",response.data.uid);
                localStorage.setItem("uname",response.data.uname);
                  navigate("/todolist");
              }
              else{
                setInvalidCredentials('true')
              }
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        catch (error) {
          return [];
        }
        
      }

  return (
    <div className='center-div'>
        <div> <h1>Login Page </h1></div>
        <div className='center bg-info'>
            <Form onSubmit={handleLogin}>
            <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control value={userEmail} type="email" placeholder="Enter Email..." onChange={handleEmailchange} required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={userPassword} type="password" placeholder="Password" onChange={handlePasswordchange} required/>
            </Form.Group>

            {/* conditional rendering on login button */}

            {invalidCredentials && <p className='text-danger'>Invalid username or password!</p>}
        
        
            <div className='text-center'>
                <Button variant="primary" type="submit">Login</Button>
                <p className='mt-3 mb-0'>Don't have an account?</p>
                <Link to="/signup"><Button type="submit" className='btn btn-danger mb-3'>Signup</Button></Link>
            </div>
            
            </Form>
        </div>
    </div>
  );
}

export default LoginPage;