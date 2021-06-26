import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

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
      </div>
    );
}

export default Start;
