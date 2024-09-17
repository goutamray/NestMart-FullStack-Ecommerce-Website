import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { Link } from "react-router-dom";

// import images 
import googleImage from "../../assets/img/icons/logo-google.svg";
 import loginImg from "../../assets/img/thumbnail/login-1.png";


import "./SignIn.css"
const SignIn = () => {

  const [showPassword, setShowPassword ] = useState(false); 
  const [formFields, setFormFields] = useState({
   email : "",
   password : "",
 }); 


 const handleChangeFieldData = (e) => {
   setFormFields((prevState) => ({
     ...prevState,
     [e.target.name] : e.target.value
   }))
  }; 

  return (
    <>
        <div className="login-section">
          <div className="container-fluid">
            <div className="row"> 

             <div className="col-md-2 single-part"></div>
              <div className="col-md-4 col-sm-6 image-part1 ">
                <div className="image-login">
                     <img src={loginImg} alt="" />
                 </div>
              </div>

             {/* Sign up form  start */}
              <div className="col-md-4 col-sm-6 image-part ">
                <div className="sign-in-form py-3 ">
                    <div className="card p-3 shadow">    
                            <h4 className="ms-3 mt-2"> Sign In </h4>
                        <div className="card-body">
                        <div className="form-floating mb-3">
                              <input
                                type="email"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                name="email"
                                value={formFields.email}
                                onChange={handleChangeFieldData}
                              />
                              <label htmlFor="floatingInput">Email address</label>
                            </div>
                       
                          <div className="pass-box"> 
                            <div className="form-floating ">
                                <input
                                   type={ showPassword === false ? "password" : "text"} className="form-control"
                                   id="floatingPassword"
                                   placeholder="Password"
                                   name="password"
                                   value={formFields.password}
                                   onChange={handleChangeFieldData}
                                 />
                                <label htmlFor="floatingPassword">Password</label>
                              </div>
                              <div className="icon-show">
                                 <button className="icon" onClick={() => setShowPassword(!showPassword)}>
                                  {
                                    showPassword === false ? <FaRegEyeSlash /> : <FiEye />
                                  }
                                  
                                </button>
                              </div>
                          </div>

                              <div className="signIn-button">
                                  <button > Sign In </button> 
                              </div>
                              <div className="or text-center p-2"> <p> OR  </p></div>
                              <div className="google-btn">
                                <button > <img src={googleImage} alt="" /> Sign In With Google </button>
                              </div>
                              
                              <div className="not-account mt-3">
                                <p className="text-center">  Not have an Acount <Link to="/register">  Sign Up </Link>  </p>
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

export default SignIn








