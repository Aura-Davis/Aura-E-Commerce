import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

const Category = (props) => {
    return (
        <div>
            <Link className="category" to={`/${props.name}`}>
                <img className="category-image" src={props.image} alt="" />
                <div className="category-header">{props.name}</div>
            </Link>
        </div>
    )
}

export default Category