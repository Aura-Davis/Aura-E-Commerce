import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';

const Popular = (props) => {
    
    const { all_product } = useContext(ShopContext);
    return (
        <div className="popular">
            <h1>Recommended</h1>
            <div className="popular-item">
                {all_product.map((item, i) => {
                    if (item.recommended === true) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image}
                            price={item.price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <Link className="categories-link" to='/Categories'>Categories</Link>
        </div>
    )
}

export default Popular