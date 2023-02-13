import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import './AddNewHandlers.css'
import {useNavigate} from 'react-router-dom'

const AddNewHandlers = () => {
    const navigate = useNavigate()
    return(
        <div>
            <div className="headerH">
            <h4>Add New Handler</h4>
            <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"white"}>
                <CloseIcon style={{paddingLeft : '3em'}} onClick = {() => navigate(-1)} />
            </Grid>
            </Grid>
            </div>

            <div className = "bodyDiv">
            <p>Full Name</p>
            <input type="text" name="name" placeholder="Enter handler's name"/>
            <p>ID Number</p>
            <input type="text" name="name" placeholder="Enter handler's ID Number"/>
            <p>Phone Number</p>
            <input type="text" name="name" placeholder="Enter handler's phone number"/>
            </div>
            <Button variant="contained" className='buttonB' style={{paddingRight : '2em', marginLeft : '14em', marginTop: '2em', backgroundColor : '#26AAE1'}}>ADD</Button>
        </div>
    )
}

export default AddNewHandlers