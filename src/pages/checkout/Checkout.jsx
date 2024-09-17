
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';



import "./Checkout.css"; 

const Checkout = () => {

  
  const navigate = useNavigate(); 
  
   const [input, setInput] = useState({
    name : "",
    email : "",
    phone : "",
    country : "",
    zipCode : "",
    address : "",
    appartment : "",
    city : "",
    state : "",
   });
  
   // handle input change 
   const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value
    }))
   }; 




  return (
    <>

      <section className="checkout-section">
        <div className="container">
          <form > 
            <div className="row">
              <div className="col-md-8 checkout-left">
                <div className="card p-3"> 
                    <h2 className='billing-info'> Billings Details </h2>

                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className="form-group">
                          <TextField 
                              fullWidth
                              label="Full Name" 
                              size='small'
                              variant="outlined"
                              name='name' 
                              value={input.name}
                              onChange={handleInputChange}
                              />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                            <TextField 
                              fullWidth
                              label="Country Name" 
                              size='small'
                              variant="outlined"
                              name='country' 
                              value={input.country}
                              onChange={handleInputChange} 
                              />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <h2 className='lavel-data'> Street address * </h2>
                          <TextField 
                              fullWidth
                              label="House Number and Street Address" 
                              size='small'
                              variant="outlined"
                              className='mb-3'
                              name='address' 
                              value={input.address}
                              onChange={handleInputChange} 
                              />
                          <TextField 
                              fullWidth
                              label="Apartment, suite, unit, etc.(optional)" 
                              size='small'
                              variant="outlined"
                              name='appartment' 
                              value={input.appartment}
                              onChange={handleInputChange} 
                              />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <h2 className='lavel-data'> Town / City * </h2>
                          <TextField 
                              fullWidth
                              label="City" 
                              size='small'
                              variant="outlined"
                              name='city' 
                              value={input.city}
                              onChange={handleInputChange} 
                              />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <h2 className='lavel-data'> State / Country * </h2>
                          <TextField 
                              fullWidth
                              label="State" 
                              size='small'
                              variant="outlined"
                              name='state' 
                              value={input.state}
                              onChange={handleInputChange} 
                              />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <h2 className='lavel-data'> Postcode / ZIP * </h2>
                          <TextField 
                              fullWidth
                              label="ZIP Code" 
                              size='small'
                              variant="outlined"
                              name='zipCode' 
                              value={input.zipCode}
                              onChange={handleInputChange} 
                              />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <div className="form-group">
                          <h2 className='lavel-data'> Phone </h2>
                            <TextField 
                              fullWidth
                              label="Phone Number" 
                              size='small'
                              variant="outlined"
                              name='phone' 
                              value={input.phone}
                              onChange={handleInputChange} 
                              />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                          <h2 className='lavel-data'> Email </h2>
                            <TextField 
                              className='custom-width'
                              fullWidth 
                              label="Email Address" 
                              size='small'
                              variant="outlined"
                              name='email' 
                              value={input.email}
                              onChange={handleInputChange} 
                              />
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-md-4 checkout-right">
                 <div className="card p-4 table-bg">
                   <h4> Your Order </h4>
                   <table className='table table-borderless'>
                     <thead> 
                        <tr>
                          <th> Product </th>
                          <th className='text-end'> Subtotal </th>
                        </tr>
                     </thead>
                     <tbody>
                    <tr className='table-padding'>
                          <td> this is product <b> ×  5</b> </td>
                          <td className='custom-price'> 500 </td>
                        </tr>
                        <tr>
                          <td className='text-bold-data'> Subtotal </td>
                          <td className='custom-price text-bold-data'>   
                           Tk 500  
                          </td>
                        </tr>
                     </tbody>
                   </table>
                   <div className="process-btn">
                      <button type='submit' className='btn-data'> 
                            Place Order 
                      </button>   
                   </div>
                 </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Checkout











