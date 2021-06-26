import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FormControl from 'react-bootstrap/FormControl'

function Browse() {
    return (
      <div>
        <h2>Browse</h2>
        <>
            <InputGroup>
                <FormControl
                    placeholder="Browse Grocery Items"
                    aria-label="Browse Grocery Items"
                    aria-describedby="basic-addon2"
                />

                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Search By"
                    id="input-group-dropdown-2"
                >
                <Dropdown.Item href="#">Alphabetical</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Category</Dropdown.Item>
                </DropdownButton>
            </InputGroup>
        </>
      </div>
    );
}

export default Browse;
