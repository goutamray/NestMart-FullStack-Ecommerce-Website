
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/img/thumbnail/login-1.png";

import createToast from "../../utils/toastify";
import { createNewUser } from "../../utils/api";

// loading 
import CircularProgress from '@mui/material/CircularProgress';

import "./SignUp.css"
const SignUp = () => {
  const [showPassword, setShowPassword ] = useState(false); 
  const [showPassword1, setShowPassword1 ] = useState(false); 

 const [input, setInput] = useState({
   name : "",
   email : "",
   phone : "",
   password : "",
   confirmPassword : ""
 });   

 const [loading, setLoading] = useState(false);
 const navigate = useNavigate();           

  // handle input change 
   const handleChangeField = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
   }; 

   // handle form submit 
   const handleFormSubmit = (e) => {
    e.preventDefault();
  
    // Set loading to true at the beginning
    setLoading(true);
    
    // validation 
    if (!input.name || !input.email || !input.password ) {
      setLoading(false);
      createToast("All fields are required"); 
      return;
    }

    // validation 
    if (input.password !== input.confirmPassword ) {
      setLoading(false);
      createToast("Password Not Match"); 
      return;
    }
  

    try {
      // Create user
      createNewUser("/signup", input)
        .then((res) => {
          setLoading(false); 
          createToast("User Register Successful", "success");
          
          // Redirect to login page after successful registration
          setTimeout(() => {
            navigate("/login");
          }, 2000);
          
          // Clear input fields
          setInput({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPass: "",
            isAdmin: true,
          });
        })
        .catch((error) => {
          setLoading(false);
    
          // Assuming the backend returns different error codes or messages for email and phone number conflicts
          if (error.response) {
            const status = error.response.status;
            const errorMessage = error.response.data.message;
    
            if (status === 400) {
              if (errorMessage.includes("Email")) {
                // Email already exists
                createToast("Email already exists. Please use a different email.", "error");
              } else if (errorMessage.includes("Phone")) {
                // Phone number already exists
                createToast("Phone number already exists. Please use a different phone number.", "error");
              }
            } else {
              // Other errors
              createToast("Registration failed. Please try again.", "error");
            }
          } 
    
          console.error("Error during registration:", error);
        });
      } catch (error) {
        setLoading(false);
        console.error("Unexpected error:", error);
        createToast("An unexpected error occurred. Please try again.", "error");
      }


   }



  return (
    <>
      <div className="login-section">
        <div className="container-fluid">
            <div className="row">  
              <div className="col-md-2 single-part "></div>
               <div className="col-md-4 col-sm-6 image-part1 " >
                 <div className="image-login">
                   <img src={loginImg} alt="" />
                 </div>
              </div>

              {/* Sign up form  start */}
              <div className="col-md-4 col-sm-6 image-part">
                <div className="sign-in-form ">        
                    <div className="card p-3 shadow">
                      <h4 className="ms-3 mt-2"> Sign Up </h4>
                        <div className="card-body">
                        <form onSubmit={handleFormSubmit}> 
                          <div className="form-floating mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                  id="floatingName"
                                  name="name"
                                  value={input.name}
                                  onChange={handleChangeField}
                                />
                                <label htmlFor="floatingName"> Name </label>
                            </div>
                          <div className="form-floating mb-2">
                          <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="email"
                                value={input.email}
                                onChange={handleChangeField}
                              />
                              <label htmlFor="floatingInput">Email address</label>
                            
                          </div>
                          <div className="form-floating mb-2">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="floatingPhone"
                                  placeholder="Phone"
                                  name="phone"
                                  value={input.phone}
                                  onChange={handleChangeField}
                                />
                                <label htmlFor="floatingPhone"> Phone Number </label>
                          </div>
                        
                            <div className="pass-box"> 
                              <div className="form-floating ">
                                  <input
                                    type={ showPassword === false ? "password" : "text"} className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    value={input.password}
                                    onChange={handleChangeField}
                                  />
                                  <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="icon-show">
                                  <button 
                                   onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword(!showPassword);
                                  }}
                                  className="icon" 
                                   >
                                    {
                                      showPassword === false ? <FaRegEyeSlash /> : <FiEye />
                                    }
                                    
                                  </button>
                                </div>
                            </div>    

                            <div className="pass-box mt-2"> 
                              <div className="form-floating ">
                                  <input
                                    type={ showPassword1 === false ? "password" : "text"} className="form-control"
                                    id="confirmPassword"
                                    placeholder="Password"
                                    name="confirmPassword"
                                    value={input.confirmPassword}
                                    onChange={handleChangeField}
                                  />
                                  <label htmlFor="confirmPassword"> Confirm Password</label>
                                </div>
                                <div className="icon-show">
                                  <button 
                                  className="icon" 
                                  onClick={(e) => {
                                     e.preventDefault(); 
                                     setShowPassword1(!showPassword1)
                                    }}>
                                    {
                                      showPassword1 === false ? <FaRegEyeSlash /> : <FiEye />
                                    }
                                    
                                  </button>
                                </div>
                            </div>

                            <div className="signIn-button">
                                <button type="submit" > 
                                {
                                  loading === true ?   
                                  <CircularProgress color="inherit" className="ml-3 loader "/> : 
                                  "Sign Up"
                                }
                                </button> 
                            </div>
                        </form>
                              <div className="not-account mt-3">
                                <p className="text-center">Already have an Acount <Link to="/login">  Sign In </Link>  </p>
                              </div>
                        </div>
                    </div>
                </div>
              </div>
              {/* Sign up form  end */}
              <div className="col-md-2 single-part "></div>
             </div>
           </div>
        </div>
    </>
  )
}

export default SignUp











