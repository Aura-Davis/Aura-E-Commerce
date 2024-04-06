import React, { useContext, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {

    const { addToCart } = useContext(ShopContext);

    const [visible, setVisible] = useState(false)

    const showAlert = () => {
        if (visible === true) {
            return;
        }
        setVisible(true);
        setTimeout(() => setVisible(false), 2500);
    }

    return (
        <div className="item">
            <Link className="item-link" to={`/Product/${props.id}`}>
                <img className="item-image" src={props.image} alt="" />
                <div className="item-header">{props.name}</div>
                <div className="item-header">Price: ${props.price}</div>
            </Link>
            {
                visible === true ? <div className="show-alert">Added to Cart</div> : <></>
            }
            <button className="item-btn" onClick={() => { addToCart(props.id), showAlert() }}>Add to Cart</button>
        </div>
    )
}

export default Item