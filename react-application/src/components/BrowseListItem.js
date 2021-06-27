import React, { useState } from 'react';
import './BrowseListItem.css'

function BrowseListItem({ name, onClick }) {

    const handleClick = () => {
        onClick(name);
    }

    return <div className="list-item" onClick={handleClick}>{name}</div>
}

export default BrowseListItem;
