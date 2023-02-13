import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import './Transhipmentship_entry.css'
import Select from 'react-select'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Uploader from "./Uploader";
import CheckIcon from '@mui/icons-material/Check';
import {useNavigate} from 'react-router-dom'

const Transhipment_entry = () => {

    const navigate = useNavigate()

    const [productName, setProductName] = useState('')
    const [numberOfItem, setNumberOfItem] = useState('')
    const [weight, setWeight] = useState('')
    const [price, setPrice] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        setMessage(`${productName} ${numberOfItem} ${weight} ${price}`)
        setProductName('')
        setNumberOfItem('')
        setWeight('')
        setPrice('')
    }

    const option_plate_number = [
    { value: "RAD", label: "RAD 165 IEW" },
    { value: "RAA", label: "RAA 100 TYR" },
    { value: "RAA", label: "RAA 125 UYR" },
    { value: "RAE", label: "RAE 123 TRY" },
    ];
    const option_handlers= [
    { value: "RAD", label: "RAD 165 IEW" },
    { value: "RAA", label: "RAA 100 TYR" },
    { value: "RAA", label: "RAA 125 UYR" },
    { value: "RAE", label: "RAE 123 TRY" },
    ];
   
         return(
        <div className="mainDiv">
            <div className="headerDiv">
            <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"white"}>
                <CloseIcon/>
            </Grid>
            </Grid>
                <h4>New Transhipment Entry</h4>
            </div>

            <h2>Offloading Car </h2>

            <div className="try">
                <label>
                Select plate number
                <div style={{display : 'flex'}}>
                    <Select options={option_plate_number} placeholder = "select car" className="select"/>
                <div>
                    <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"#26AAE1"}>
                <AddBoxIcon style= {{fontSize : '2.2em'}}/>
            </Grid>
            </Grid>
                </div>
                </div>
                </label>
                <label>
                Select Handlers
                <div style={{display : 'flex'}}>
                    <Select options={option_handlers} placeholder = "Select multiple handlers" className="select"/>
                <div>
                    <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"#26AAE1"}>
                <AddBoxIcon style= {{fontSize : '2em'}} onClick = {() => navigate("/AddNewHandlers")}/>
            </Grid>
            </Grid>
                </div>
                </div>
                </label>
            </div>

            <label style={{display : 'grid', gridTemplateColumns : 'auto auto', columnGap : '35em' }}>
            <p>Product details </p>

            <p style={{marginRight : '8em', borderColor : '#26AAE1', backgroundColor : '#fff', fontSize : '14px', 
            border : '2px solid', borderRadius : '5px'}} onClick={() => navigate("/AddNewGood")}> <span style={{fontWeight : 'bold', 
            fontSize : '20px', marginRight : '10px',
             marginLeft : '10px'}}>+</span>Add New Product</p> 

            </label>
            <hr style={{backgroundColor : '#26AAE1'}}/>

            {/* <p className="output">{message} 
            <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"#26AAE1"}>
                <CheckIcon style={{float : 'right'}} />
            </Grid>
            </Grid>
            </p> */}

            <p className="output">
            Sugar 32items 52kg/item 
            <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"#26AAE1"}>
                <CheckIcon style={{float : 'right'}} />
            </Grid>
            </Grid>
            </p>

            <div className="try">
                <label>
                Select product name
                <div style={{display : 'flex'}}>
                    <Select options={option_plate_number} placeholder = "select product" className="select" value={productName} onChange = {(event) => {setProductName(event.target.value)}} />
                <div>
                    <Grid container sx={{ color: "text.primary"}}>
            <Grid item xs={4}>
                <Typography></Typography>
            </Grid>
            <Grid item xs={12} color={"#26AAE1"}>
                <AddBoxIcon style= {{fontSize : '2em'}}/>
            </Grid>
            </Grid>
                </div>
                </div>
                </label>
                <label>
                Number of items
                <input type="text" name="name" placeholder="Enter number of product items" value={numberOfItem} onChange = {(event) => {setNumberOfItem(event.target.value)}} />
                </label>
                <label>
                Weight/Item
                <input type="text" name="name" placeholder="Enter product weight/item" value={weight} onChange = {(event) => {setWeight(event.target.value)}} />
                </label>
                <label>
                Price/Item (Optional)
                <input type="text" name="name" placeholder="Enter price/item" value={price} onChange = {(event) => {setPrice(event.target.value)}} />
                </label>
            </div>

            <button className="saveP" onClick={handleSubmit} >Save Product</button>

            <p style={{paddingLeft : '10em', fontWeight : 'bold'}}>Upload supporting document</p>
            <Uploader/>
            <div style={{display : 'grid', gridTemplateColumns : 'auto auto', columnGap : '52em'}}>
                <button style={{color: '#fff', backgroundColor: '#000', marginLeft : '10em'}}>Cancel</button>
                <button style={{backgroundColor : '#26AAE1', color : '#fff', marginRight : '7em'}}>Next</button>
            </div>
        </div>
    )
    
}

export default Transhipment_entry