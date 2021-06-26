import express from 'express';
import data from "../data";


const app = express();
const PORT = process.env.PORT ||3000;
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

app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});