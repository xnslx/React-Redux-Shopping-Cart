import React from 'react';
import {initialState} from '../Reducer/Reducer';


const Products = () => {
    const {products} = initialState;
    console.log(products)
    return (
        <div>
            {products.map(pdct => {
                return (
                    <ul key={pdct.id}>
                        <li><strong>Product Name:</strong> {pdct.name}</li>
                        <li><strong>Product Price:</strong> {pdct.price}</li>
                        <li><strong>Product Stock: </strong>{pdct.stock}</li>
                        <button>+</button>
                        <button>-</button>
                    </ul>
                )
            })}
        </div>
    )
};

export default Products;
