import express from 'express';

import data from '../../data.js';
import binSearch from '../bin-search.js';
import categories from '../../categories.js';

const gpRouter = express.Router();

//grocery by id
gpRouter.get('/groceries/id/:id', (req, res)=>{              
    let id = parseInt(req.params.id); 
    if (isNaN(id)){
        res.status(404).json({error: `Invalid id`});
    }
    else{
    let response= data.find((grocery) => grocery.id === id.toString());
    if (!response){
        res.status(404).json({error: `Grocery with ID: ${id} does not exist`});
    }
    res.json(response).status(200)
}
});

//grocery by name
gpRouter.get('/groceries/name/:name', (req, res)=> {
    let name = req.params.name;

    // Make sure the name has the potential to be valid before conducting search
    // Check if the first letter of each word is capitalized:
    let words = name.split(' ');
    for (let j = 0; j < words.length; ++j) {
        if (words[j][0] < 'A' || words[j][0] > 'Z') {
            return res.status(400).json({ error: "All words in the grocery must start with a capital letter." });
        }
    }

    let response = binSearch(data, name);
    if (!response){
        res.status(404).json({ error: `Grocery with name: ${name} does not exist`});
    }
    res.json(response).status(200)
});

//grocery by category
gpRouter.get('/groceries/category/:category', (req, res)=>{
    let category = req.params.category;

    // Make sure category is a valid category
    let isValid = false;
    categories.forEach(cat => {
        if (category === cat) {
            isValid = true;
        }
    });
    
    if (!isValid) {
        return res.status(400).json({ error: `Provided category: ${category} is invalid` });
    }

    let response = data.filter((grocery) => grocery.category === category);
    if (!response){
        res.status(404).json({ error: `Grocery category: ${category} does not exist` });
    }
    res.json(response).status(200)
});


export default gpRouter;
