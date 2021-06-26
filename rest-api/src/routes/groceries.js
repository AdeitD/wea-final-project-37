import express from 'express';
import { writeFile } from 'fs';

import data from '../../data.js';

const gRouter = express.Router();

//entire grocery list
gRouter.get('/api/v1/groceries', (req, res)=>{
    res.json(data).status(200);
});

//adds new grocery to list
gRouter.post("/api/v1/groceries", (request, response) => {
    if (!req.body.name) {
        return res.status(400).json({ error: "Grocery needs a name parameter." });
        }
    if (!req.body.category) {
        return res.status(400).json({ error: "Grocery needs a category parameter." });
        }
    const { name, category } = request.body;
    const NewGrocery= {
        id: data.length +1
        name: name;
        category: category;
    };
    data.push(NewGrocery);
    return response.status(201).json(NewGrocery)
}


export default gRouter;
