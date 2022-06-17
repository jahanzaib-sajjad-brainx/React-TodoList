import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios';

function SignupPage() {

    const [userName, setuserName]=useState('');
    const [userEmail, setuserEmail]=useState('');
    const [userPassword, setUserPassword]=useState('');
    const [signupFields,setsignupFields]=useState(false);
    const [repeatedEmail,setrepeatedEmail]=useState(false)

    const handleNamechange=(e)=>{
        setuserName(e.currentTarget.value);
    }
    const handleEmailchange=(e)=>{
        setuserEmail(e.currentTarget.value);
    }
    const handlePasswordchange=(e)=>{
        setUserPassword(e.currentTarget.value);
    }
   const navigate=useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    try {
      axios.post('/add-user', {
        username: userName,
        useremail: userEmail,
        userpassword: userPassword
      })
        .then(function (response) {
            console.log("respones: ",response.data);
            if(response.data==="field-okay"){
              
                navigate('/');
            }
            else if(response.data==="RepeatedEmail"){
                setrepeatedEmail(true)
            }
            else{
                setsignupFields(true)
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
    <div className='center-div bg-dark'>

        <h1 className='d-block text-white'>Signup Page</h1>
        <div className='bg-info center mt-5'>
            <Form onSubmit={handleSignup}>
                <Form.Group className="my-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control aria-required={true} value={userName} type="text" placeholder="Enter your name" onChange={handleNamechange} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={userEmail} type="email" placeholder="Enter email" onChange={handleEmailchange} required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                {repeatedEmail && <div className='text-danger'>This Email has been registered Already</div>}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={userPassword} type="password" placeholder="Password" onChange={handlePasswordchange} required/>
                </Form.Group>
                <div className='mb-2 ms-5'>Already has an account<Link to="/"> <a className='ms-2'>Sign in</a></Link></div>
                {signupFields && <div className='text-danger'>Required Field Missing</div>}
                <div className='text-center mb-3'>
                     <Button variant="primary" type="submit" className='btn btn-primary'>Signup</Button>
                </div>
            </Form>
        </div>
    </div>
  );
  // local storage
localStorage.setItem("name", userName, "email",userEmail);
}


export default SignupPage;