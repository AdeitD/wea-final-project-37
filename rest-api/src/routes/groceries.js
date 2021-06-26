import express from 'express';
import { writeFile } from 'fs';

import data from '../../data.js';

const gRouter = express.Router();

//entire grocery list
gRouter.get('/groceries', (req, res)=>{
    res.json(data).status(200);
});

//adds new grocery to list
gRouter.post("/groceries", (request, response) => {
    if (!request.body.name) {
        return res.status(400).json({ error: "Grocery needs a name parameter." });
        }
    if (!request.body.category) {
        return res.status(400).json({ error: "Grocery needs a category parameter." });
        }
    const { name, category } = request.body;
    const newGrocery = {
        id: (data.length + 1).toString(),
        name: request.body.name,
        category: request.body.category,
    };

    // Insert the new grocery into the sorted array
    let i = 0;
    for (i = 0; i < data.length; ++i) {
        console.log(data[i])
        if (data[i].name > newGrocery.name) break;
    }
    if (data[i - 1].name === newGrocery.name) {
        return response.status(400).json({ error: "Provided grocery already exists." });
    } else if (newGrocery.name.charAt(0) < 'A' || newGrocery.name.charAt(0) > 'Z') {
        return response.status(400).json({ error: "Grocery must start with a capital letter." });
    }
    data.splice(i, 0, newGrocery);

    // Update the data.js file
    let newData = "const data = [";
    data.forEach(grocery => newData += "\n    " + JSON.stringify(grocery) + ",");
    newData += "\n]\n\nexport default data;"; 
    console.log(newData);
    writeFile('data.js', newData, () => console.error("Unable to add object to database"));
    return response.status(201).json(newGrocery)
});


export default gRouter;