import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
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
        <div>
            <h2>
                <Link className="breadcrum-link" to='/'>Home / </Link>
                <Link className="breadcrum-link" to={`/${product.category}`}>{product.category} / </Link>
                <a className="breadcrum-link">{product.name}</a>
            </h2>

            <div className="product-display">
                <div className="product-display-left">
                    <div className="image-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div>
                    <img className="main-image" src={product.image} alt="" />
                </div>
                <div className="product-display-right">
                    <h1>{product.name}</h1>
                    <div className="price">Price: ${product.price}</div>
                    <div className="description">{product.description}</div>
                    {
                        visible === true ? <div className="show-alert">Added to Cart</div> : <></>
                    }
                    <button onClick={() => { addToCart(product.id), showAlert() }}>Add to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default ProductDisplay