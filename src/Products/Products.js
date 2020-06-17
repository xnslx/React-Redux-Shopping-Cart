import React from 'react';
import {initialState} from '../Reducer/Reducer';
import {connect} from 'react-redux';


const Products = (props) => {
    console.log(props)
    console.log(initialState)
    const {products} = initialState;


    // const removeItems = (prdtId) => {
    //     return props.onRemoveItems;
    // }

    // const addItems = (prdtId) => {
    //     return props.onAddItems;
    // }
    return (
        <div>
            {products.map(pdct => {
                return (
                    <ul key={pdct.id}>
                        <li><strong>Product Name:</strong> {pdct.name}</li>
                        <li><strong>Product Price:</strong> {pdct.price}</li>
                        <li><strong>Product Stock: </strong>{pdct.stock}</li>
                        <button onClick={props.onRemoveItems}>-</button>
                        <span>{props.cts}</span>
                        <button onClick={props.onAdditems}>+</button>
                    </ul>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        cts:state.counter
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onAddItems: (prdtId) => dispatch({type:'INCREASE', id: prdtId}),
        onRemoveItems: (prdtId) => dispatch({type:'DECREASE', id:prdtId})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
