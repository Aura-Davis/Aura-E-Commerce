import React from 'react'
import './CategoriesComponent.css'
import data_categories from '../../static/categories'
import Category from '../Category/Category'


const Categories = () => {
    return (
            <div className="categories-component">
                <h1>Categories</h1>
                <div className="categories-component-item">
                    {
                        data_categories.map((category, i) => {
                            return <Category key={i} id={category.id} name={category.name} image={category.image} />
                        })
                    }
                </div>

            </div>
    )
}

export default Categories