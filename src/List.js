import Item from './Item';
import { Link } from 'react-router-dom';

const List = ({ items = [] }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <Link to={`/details/${item.id}`}>
                        <Item item={item} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default List;