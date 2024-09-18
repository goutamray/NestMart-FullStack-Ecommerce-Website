

import {  useState } from "react";

import avaterPhoto from "../../assets/avater/aaaa.jpg"; 


import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import TextField from '@mui/material/TextField';

import { FaCloudUploadAlt } from "react-icons/fa";

import "./MyAccount.css"; 

const MyAccount = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    photo: "", // This will store the file object temporarily
    previewPhoto: "", // For image preview
  });

  const [fields, setfields] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  


  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handle file input change and set preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setInput((prevState) => ({
        ...prevState,
        photo: file, // Store the file object for uploading
        previewPhoto: imageUrl, // For image preview
      }));
    }
  };
  
  // Handle input change 
   const handleInputChange = (e) => {
      setInput((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
      }));
    };


  return (
    <>
      <div className="account">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="breadcrumb">
                <h2 className="text-white"> MY ACCOUNT </h2>
              </div>
            </div>
          </div>
          </div>
      </div>

      <div className="account-dashboard">
        <div className="container">
         <div className="row">
               <div className="col">
                  <Box sx={{ width: '100%', typography: 'body1' }} className="custom-bg">
                    <TabContext value={value}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                          <Tab label="Edit Profile" value="1" />
                          <Tab label="Change Password" value="2" />
                        </TabList>
                      </Box>                     
                     <TabPanel value="1">
                        <form >
                          <div className="row mt-3">
                            <div className="col-md-3">  
                                    <div className="user-data">
                                       <div className="user-photo">
                                          <img src={input.previewPhoto || avaterPhoto} alt="User" />
                                       </div>
                                       <div className="overlay">
                                          <label htmlFor="photo-upload" className="file-upload-label">
                                            <FaCloudUploadAlt /> Upload
                                          </label>
                                          <input
                                            id="photo-upload"
                                            name="photo"
                                            type="file"
                                            onChange={handleFileChange}
                                            style={{ display: "none" }} // Hide the actual input field
                                          />
                                        </div>
                                    </div>
                              </div>
                             <div className="col-md-7">
                                <div className="row">
                                <div className="col-md-6">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Name" 
                                            variant="outlined" 
                                            name="name"
                                            value={input.name}
                                            onChange={handleInputChange}
                                          />
                                     </div>
                                    </div>
                                   <div className="col-md-6">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth 
                                            disabled 
                                            id="outlined-basic" 
                                            label="Email" 
                                            variant="outlined" 
                                            name="email"
                                            value={input.email}
                                            onChange={handleInputChange}
                                          />
                                     </div>
                                   </div>
                                  </div>
                                <div className="row">
                                   <div className="col-md-12">
                                     <div className="form-group mt-2">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Phone" 
                                            variant="outlined" 
                                            name="phone"
                                            value={input.phone}
                                            onChange={handleInputChange}
                                          />
                                     </div>
                                   </div>
                                </div>
                                <div className="row">
                                    <button 
                                       type="submit" 
                                       className="save-btn"> 
                                         save
                                    </button>
                                 </div>
                             </div>
                            </div>
                        
                        </form>
                      </TabPanel>
                      <TabPanel value="2">
                      <form>
                          <div className="row mt-3">
                             <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-4">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Old Password" 
                                            variant="outlined" 
                                            name="oldPassword"
                                            value={fields.oldPassword}
                                            
                                          />
                                     </div>
                                    </div>
                                   <div className="col-md-4">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth  
                                            id="outlined-basic" 
                                            label="New Password" 
                                            variant="outlined"
                                            name="newPassword" 
                                            value={fields.newPassword}
                                           
                                          />
                                     </div>
                                   </div>
                                   <div className="col-md-4">
                                     <div className="form-group">
                                        <TextField 
                                            fullWidth 
                                            id="outlined-basic" 
                                            label="Confirm Password" 
                                            variant="outlined"
                                            name="confirmPassword"
                                            value={fields.confirmPassword} 
                                           
                                          />
                                     </div>
                                   </div>
                                  </div>
                                <div className="row">
                                    <button 
                                       type="submit" 
                                       className="save-btn"
                                      > 
                                      Save
                                     </button>
                                 </div>
                             </div>
                            </div>
                        
                        </form>
                      </TabPanel>
                    </TabContext>
                  </Box>
               </div>
            </div>
     
        </div>
      </div>
    </>
  )
}

export default MyAccount
