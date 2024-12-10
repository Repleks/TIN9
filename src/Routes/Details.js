import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setItem(data));
    }, [id]);

    if (!item) {
        return <h1>Ładowanie</h1>;
    }

    return (
        <div>
            <h1>Details for Item ID: {id}</h1>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
        </div>
    );
};

export default Details;