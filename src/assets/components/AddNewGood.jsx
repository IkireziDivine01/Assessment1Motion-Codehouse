import { Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import "./AddNewGood.css"
import {useNavigate} from 'react-router-dom'

const AddNewGood = () => {
    const navigate = useNavigate()
    return(
        <div>
           <div className="header">
            <h4>Add New Good</h4>
            <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"white"}>
                <CloseIcon style={{paddingLeft : '3em'}} onClick = {() => navigate(-1)} />
            </Grid>
            </Grid>
            </div>

            <div style={{paddingLeft : '12em', marginTop : '4em'}}>
            <p>Name</p>
            <input type="text" name="name" placeholder="Name your good"/>
            <p>Dimension (Optional)</p>
            <input type="text" name="name" placeholder="Specify size occupied"/>
            </div>
            <Button variant="contained" style={{paddingRight : '2em', marginLeft : '14em', marginTop: '2em', backgroundColor : '#26AAE1'}}>ADD</Button>
        </div>
    )
}

export default AddNewGood