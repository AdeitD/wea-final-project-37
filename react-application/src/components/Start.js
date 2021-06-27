import React, {useState} from 'react';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import FormControl from 'react-bootstrap/FormControl';
import { Accordion, Card, Button, InputGroup, FormControl } from "react-bootstrap";



const tabs = [
  { id: 1, label: "Produce", description: "*insert food stuff here" },
  { id: 2, label: "Bakery", description: "Content of Tab 2" },
  { id: 3, label: "Deli", description: "Content of Tab 3" },
  { id: 4, label: "Frozen Meat", description: "Content of Tab 2" },
  { id: 5, label: "Organic Materials", description: "Content of Tab 2" },
  { id: 6, label: "Baking Ingredients", description: "Content of Tab 2" },
  { id: 7, label: "Sauces/Condiments", description: "Content of Tab 2" },
  { id: 8, label: "Cereals/Snacks", description: "Content of Tab 2" },
  { id: 9, label: "Drinks", description: "Content of Tab 2" },
  { id: 10, label: "Dairy", description: "Content of Tab 2" },
  { id: 11, label: "Frozen Goods", description: "Content of Tab 2" }
];

const Start = () => {
  const [groceryName, setGroceryName] = useState('');
  
  const handleChangeName = (event) => {
    setGroceryName(event.target.value);//takes value entered on site, sets variable to it
  }

  const handleAddGrocery = () => {
    console.log(groceryName);
  };

  const GQL_API = `http://localhost:3030/`
    const GQL_QUERY = `
        query {
          grocery (name: $name){
            name
            category
          }
            
        }`;

        const handleLoadGroceries = () => {
          const variables = { name: groceryName};
          fetch(GQL_API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: GQL_QUERY,
                variables,
            }),
        })
            .then((response) => response.json())
            .then(res => console.log(res.data))
            // .then((result) => setDoctorsList(result.data.patient.doctors));
            }

  return (
      <div>
        <h2>Get Started</h2>
        
        <input type='text' value={groceryName} onChange={handleChangeName} />
        <Button onClick={handleAddGrocery, handleLoadGroceries}>Add</Button>

        <h3>My Grocery List</h3>

        {tabs.map(tab => (
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={tab.id}>
                {tab.label}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={tab.id}>
              <Card.Body>{tab.description}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}

      </div>
    );
}

export default Start;
