import React, { useState, useEffect } from 'react';

const Attribute = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const newItem = {
            id: Date.now(),
            name: 'Attribute',
            email: 'Attribute@example.com'
        };
        setItem(newItem);
    }, []);

    if (!item) {
        return <h1>Ładowanie</h1>;
    }

    return (
        <div>
            <h1>Details for Item ID: {item.id}</h1>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
        </div>
    );
};

export default Attribute;