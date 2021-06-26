import React from 'react';
//import InputGroup from 'react-bootstrap/InputGroup';
//import Button from 'react-bootstrap/Button';
//import FormControl from 'react-bootstrap/FormControl';
import { Accordion, Card, Button, FormControl, InputGroup } from "react-bootstrap";

const tabs = [
  { id: 1, label: "Produce", description: "*insert food stuff here" },
  { id: 2, label: "Bakery", description: "Content of Tab 2" },
  { id: 3, label: "Deli", description: "Content of Tab 3" },
  { id: 4, label: "Frozen Meat", description: "Content of Tab 2" },
  { id: 5, label: "Organic Materials", description: "Content of Tab 2" },
  { id: 6, label: "Baking Ingredients", description: "Content of Tab 2" },
  { id: 7, label: "Sauces/Condiments", description: "Content of Tab 2" },
  { id: 8, label: "Cereals/Snacks", description: "Content of Tab 2" },
  { id: 2, label: "Drinks", description: "Content of Tab 2" },
  { id: 2, label: "Dairy", description: "Content of Tab 2" },
  { id: 2, label: "Frozen Goods", description: "Content of Tab 2" }
];

function Start() {
    return (
      <div>
        <h2>Get Started</h2>
        
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Enter Grocery Name"
            aria-label="Enter Grocery Name"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Add</Button>
          </InputGroup.Prepend>
        </InputGroup>

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
