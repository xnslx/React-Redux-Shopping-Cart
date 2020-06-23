import React from 'react';
import {v4} from 'uuid'
import {connect }from 'react-redux';

const CheckOut = props => {
    return (
      <div>
        <h5>Your Cart:{
            props.shoppingCart.map(cart => {
                return (
                    <ul key={v4()} style={{listStyle:'none'}}>
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
      console.log('state', state)
    return {
      totalPrice: state.price,
      shoppingCart:state.cart
    };
  };
  
  export default connect(mapStaateToProps)(CheckOut);
