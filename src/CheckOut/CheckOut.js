import React from 'react';
import {connect }from 'react-redux';

const CheckOut = props => {
    return (
      <div>
        <h5>Your Cart:{
            props.shoppingCart.map(cart => {
                return (
                    <ul key={cart.id}>
                        <li>{cart.name}</li>
                    </ul>
                )
            })
        }</h5>
        <h4>Total Price:{props.totalPrice}</h4>
        <button>Checkout</button>
      </div>
    );
  };
  
  const mapStaateToProps = state => {
      console.log(state)
    return {
      totalPrice: state.price,
      shoppingCart:state.cart
    };
  };
  
  export default connect(mapStaateToProps)(CheckOut);
