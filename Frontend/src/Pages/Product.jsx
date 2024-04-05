import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    if (all_product.length === 0) {
        return <h1>Loading...</h1>
    }
    else {
        const product = all_product.find((e) => e.id === Number(productId));
        return (
            <div>
                <ProductDisplay product={product} />
            </div>
        )
    }
    
}

export default Product