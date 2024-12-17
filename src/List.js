import React, { useState, useEffect } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import AddItem from './AddItem';

const List = () => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setListItems(data));
    }, []);

    const handleAdd = (newItem) => {
        setListItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <div>
            <AddItem onAdd={handleAdd} />
            <ul>
                {listItems.map(item => (
                    <li key={item.id}>
                        <Link to={`/details/${item.id}`}>
                            <Item item={item} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;