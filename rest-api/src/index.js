import express from 'express';
import data from "../data.js";
import categories from '../categories.js';


const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

import gpRouter from './routes/groceries-parameter';
import gRouter from './routes/groceries';

app.use('/api/v1', gpRouter);
app.use('/api/v1', gRouter);

// Assert that the groceries are sorted properly:
for (let i = 1; i < data.length; ++i) {
    if (data[i - 1].name >= data[i].name) {
        console.error("ERROR: Database ordering property violated", data[i - 1].name, data[i].name);
    }
}

// Assert that all existing groceries have valid categories
for (let i = 0; i < data.length; ++i) {
    // Check if it's a valid category
    let isValid = false;
    categories.forEach(cat => {
        if (data[i].category === cat) {
            isValid = true;
        }
    });
    if (!isValid) {
        console.error(`ERROR: Invalid category ${data[i].category}`);
    }
}

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});