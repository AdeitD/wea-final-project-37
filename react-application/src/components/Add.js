import React from 'react';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add() {
    return (
        <div>
            <h2 style={{position:"relative", left:"10px"}}>Add Grocery Items</h2>
            <p style={{position:"relative", left:"10px"}}>Add new grocery items to our database below!</p>
            
            <InputGroup className="mb-3">
        
                <InputGroup.Prepend>
                    <Button variant="primary" >Add</Button>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Enter New Grocery Name"
                aria-label="Enter New Grocery Name"
                aria-describedby="basic-addon2"
                //value={groceryName}
                //onChange={handleChangeName}
                />
            </InputGroup>
        </div>
    );
}



export default Add;
