import React from 'react';
import {v4} from 'uuid'
import {connect }from 'react-redux';

const CheckOut = props => {
    return (
      <div>
        <h5>Your Cart:{props.products.length === 0? 'Add some products' :
            props.products.map(cart => {
                return (
                    <ul key={v4()} style={{listStyle:'none'}}>
                        <li>{cart.name} {cart.counter}</li>
                    </ul>
                )
            })
        }</h5>
        <h4>Total Price:{props.totalPrice}</h4>
        <button onClick={() => props.onClear()}>Checkout</button>
      </div>
    );
  };
  
  const mapStateToProps = state => {
      console.log('state', state)
    return {
      totalPrice: state.price,
    //   shoppingCart:state.cart
    products: state.products.filter(a => a.counter >0)
    };
  };

  const mapDispatchToProps = dispatch => {
      console.log(dispatch)
      return {
          onClear :() => dispatch({type:"RESET"})
      }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);
