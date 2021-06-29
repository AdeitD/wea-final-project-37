import express from 'express';
import { writeFile } from 'fs';

import data from '../../data.js';
import categories from '../../categories.js';

const gRouter = express.Router();

//entire grocery list
gRouter.get('/groceries', (req, res)=>{
    res.json(data).status(200);
});

//adds new grocery to list
gRouter.post("/groceries", (request, response) => {
    if (!request.body.name) {
        return response.status(400).json({ error: "Grocery needs a name parameter." });
        }
    if (!request.body.category) {
        return response.status(400).json({ error: "Grocery needs a category parameter." });
        }
    const { name, category } = request.body;
    const newGrocery = {
        id: (data.length + 1).toString(),
        name: request.body.name,
        category: request.body.category,
    };

    // Find index at which to insert the new grocery into the sorted array
    let i = 0;
    for (i = 0; i < data.length; ++i) {
        if (data[i].name > newGrocery.name) break;
    }

    // Check if the grocery already exists
    if (data[i - 1].name === newGrocery.name) {
        return response.status(400).json({ error: "Provided grocery already exists." });
    }

    // Check if the first letter of each word is capitalized:
    let words = newGrocery.name.split(' ');
    for (let j = 0; j < words.length; ++j) {
        if (words[j][0] < 'A' || words[j][0] > 'Z') {
            return response.status(400).json({ error: "All words in the grocery must start with a capital letter." });
        }
    }

    // Check if it's a valid category
    let isValid = false;
    categories.forEach(cat => {
        if (newGrocery.category === cat) {
            isValid = true;
        }
    });

    if (!isValid) {
        return response.status(400).json({ error: `Provided category: ${newGrocery.category} is invalid` });
    }

    data.splice(i, 0, newGrocery);

    // Update the data.js file
    let newData = "const data = [";
    data.forEach(grocery => newData += "\n    " + JSON.stringify(grocery) + ",");
    newData += "\n]\n\nexport default data;";
    writeFile('data.js', newData, () => console.error("Unable to add object to database"));
    return response.status(201).json(newGrocery)
});


export default gRouter;