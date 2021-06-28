import React from 'react';
import './BrowseListItem.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BrowseListItem({ name, onClick }) {

    const handleClick = () => {
        toast.success(`Grocery "${name}" Added!`);
        onClick(name);
    }

    return <div className="list-item" onClick={handleClick}>{name}</div>
}

export default BrowseListItem;
