import React from 'react';

import {connect} from 'react-redux';


const Products = props => {
    // console.log(props)
  return (
    <div>
      {props.productList.map(pdct => {
        return (
          <ul key={pdct.id}>
            <li>
              <strong>Product Name:</strong> {pdct.name}
            </li>
            <li>
              <strong>Product Price:</strong> {pdct.price}
            </li>
            <li>
              <strong>Product Stock: </strong>
              {pdct.stock}
            </li>
            {/* <button onClick={() =>props.onRemoveItems(pdct.id)}>-</button>
            <span>{pdct.counter}</span>
            <button onClick={() =>props.onAddItems(pdct.id)}>+</button> */}
            <button onClick={() => props.onAddItems(pdct.id)}>Add to the cart</button>
          </ul>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productList: state.products
  };
};

const mapDispatchToProps = dispatch => {
    // console.log(dispatch)
  return {
    onAddItems: productId => dispatch({ type: "ADD", id: productId }),
    // onRemoveItems: productId => dispatch({ type: "DECREASE", id: productId })
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(Products);
