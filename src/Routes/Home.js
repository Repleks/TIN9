import React, { useState, useEffect } from 'react';
import List from '../List';
import AddItem from '../AddItem';

const Home = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setItems(data));
    }, []);

    const handleAdd = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1>Item List</h1>
            <AddItem onAdd={handleAdd} />
            <List items={items} />
        </div>
    );
};

export default Home;