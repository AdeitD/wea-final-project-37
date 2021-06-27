import React, {useState} from 'react';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import FormControl from 'react-bootstrap/FormControl';
import { Accordion, Card, Button, InputGroup, FormControl } from "react-bootstrap";
import StartList from './StartList';



const tabs = [
  { id: 1, label: "Produce", description: "" },
  { id: 2, label: "Bakery", description: "" },
  { id: 3, label: "Deli", description: "" },
  { id: 4, label: "Frozen Meat", description: "" },
  { id: 5, label: "Organic Materials", description: "" },
  { id: 6, label: "Baking Ingredients", description: "" },
  { id: 7, label: "Sauces/Condiments", description: "" },
  { id: 8, label: "Cereals/Snacks", description: "" },
  { id: 9, label: "Drinks", description: "" },
  { id: 10, label: "Dairy", description: "" },
  { id: 11, label: "Frozen Goods", description: "" }
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
        query ($name: String!) {
          grocery (name: $name){
            name
            category
          }
            
        }`;

        const handleLoadGroceries = () => {
          
          const variables = { name: groceryName };
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
              .then(res => {
                if (res.errors) {
                  throw res.errors[0];
                }
                return res;
              })
              .then(res => res.data.grocery)
              .then(res => {
                // Get the tab that corresponds to the category
                const idx = tabs.findIndex((t) => t.label === res.category);
                if (tabs[idx].description) {
                  // Add a space which the program uses as a delimiter between objects
                  tabs[idx].description += ' ';
                }
              
                tabs[idx].description += res.name;
                // Reset the state in order to re-render the objects
                setGroceryName('');
              })
              .catch(error => console.error(error.message))
          }
          
            

  return (
      <div>
        <h2>Get Started</h2>
        
        <input type='text' value={groceryName} onChange={handleChangeName} />
        <Button onClick={handleLoadGroceries}>Add</Button>

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
              <Card.Body>
                <StartList items={tab.description} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}

      </div>
    );
}

export default Start;
