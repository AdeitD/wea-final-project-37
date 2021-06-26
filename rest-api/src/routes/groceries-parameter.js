import express from 'express';

import data from '../../data.js';
import binSearch from '../bin-search.js';

const gpRouter = express.Router();

//grocery by id
gpRouter.get('/groceries/:id', (req, res)=>{              
    let id = parseInt(req.params.id); 
    if (isNaN(id)){
        res.status(404).json({message: `Invalid id`});
    }
    else{
    let response= data.find((grocery) => grocery.id === id);
    if (!response){
        res.status(404).json({message: `Grocery with ID: ${id} does not exist`});
    }
    res.json(response).status(200)
}
});

/*
//grocery by name
gpRouter.get('/groceries/:name', (req, res)=>{
    let name = req.params.name;
    //check for capitalization of first letter
    let response= data.find((grocery) => grocery.name === name);
    if (!response){
        res.status(404).json({message: `Grocery with name: ${name} does not exist`});
    }
    res.json(response).status(200)
}
});
*/

//grocery by category
gpRouter.get('/groceries/:category', (req, res)=>{
    let category = req.params.category;
    //check for capitalization of categories as well?

    let response= data.filter((grocery) => grocery.category === category);
    if (!response){
        res.status(404).json({message: `Grocery category: ${category} does not exist`});
    }
    res.json(response).status(200)
}
});


export default gpRouter;
