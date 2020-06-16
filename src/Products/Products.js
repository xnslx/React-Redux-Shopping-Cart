import React, {useState} from 'react';
import {initialState} from '../Reducer/Reducer';
import {connect} from 'react-redux';


const Products = (props) => {
    console.log(props)
    console.log(initialState)
    const products = initialState;
    const [state, setState] = useState('')
    const changeHandler = e => {
        setState(e.target.value)
    }
    return (
        <div>
            {products.map(pdct => {
                return (
                    <ul key={pdct.id}>
                        <li><strong>Product Name:</strong> {pdct.name}</li>
                        <li><strong>Product Price:</strong> {pdct.price}</li>
                        <li><strong>Product Stock: </strong>{pdct.stock}</li>
                        <button onClick={props.onProductsDecrease}>-</button>
                        <input type="number" value={pdct.value} onChange={changeHandler}/>
                        <button onClick={props.onProductsIncrease}>+</button>
                    </ul>
                )
            })}
        </div>
    )
};

export const mapStateToProps = state => {
    return {
        pdts: state.products
    }
};


export const mapDispatchToProps = dispatch => {
    return {
        onProductsIncrease: (prdtId) => dispatch({type:'INCREASE', id: prdtId}),
        onProductsDecrease: (prdtId) => dispatch({type:'DECREASE', id:prdtId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
