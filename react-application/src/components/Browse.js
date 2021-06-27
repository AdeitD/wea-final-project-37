import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton';

import BrowseList from './BrowseList';

function Browse() {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Alphabetical', value: '1' },
        { name: 'Category', value: '2' },
        { name: 'Random', value: '3' },
    ];

    const handleChange = (e) => {
        setRadioValue(e.currentTarget.value)
    }

    return (
      <div>
        <h2>Browse</h2>
        <>
            <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        type="radio"
                        variant="secondary"
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => handleChange(e)}
                    >
                    {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
            <BrowseList type={radioValue} />
        </>
    </div>
    );
}

export default Browse;
