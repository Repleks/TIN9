import React, { useState } from 'react';

const AddItem = ({ onAdd }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { id: Date.now(), name};
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => onAdd(data));
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dodaj nowy przedmiot przedmiotów"
            />
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default AddItem;