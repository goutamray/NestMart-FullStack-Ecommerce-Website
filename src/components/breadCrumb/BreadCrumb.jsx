import { Link } from "react-router-dom"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';


import "./BreadCrumb.css"; 
const BreadCrumb = (props) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb" className="custom-breadCrumb">
          <Link underline="hover" to="/" className="my-color"  >
             Home
          </Link>
          <Link underline="hover"  to="/" className="my-color">
             {props?.category}
          </Link>
          <Typography sx={{ color: 'text.primary' }}> {props?.productName} </Typography>
      </Breadcrumbs>

    </>
  )
}

export default BreadCrumb

















