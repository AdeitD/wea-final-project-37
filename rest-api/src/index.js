import express from 'express';
import data from "../data";


const app = express();
const PORT = process.env.PORT ||3000;
app.use(express.json());


import groceries-parameters from './routes/groceries-parameters';
import groceries from './routes/groceries';

app.use('/api/v1', groceries-parameters);
app.use('/api/v1', groceries);


app.listen(PORT, () =>{
    console.log(`Server listening on port ${PORT}`);
});