const initialState = {
    products: [
      { id: 1, name: "iPad Mini", price: 500, stock: 2, counter: 0 },
      { id: 2, name: "H&M T-Shirt White", price: 10.99, stock: 10, counter: 0 },
      {
        id: 3,
        name: "Charli XCX - Sucker CD",
        price: 19.99,
        stock: 5,
        counter: 0
      }
    ],
    cart:[],
    price:0
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
        let addedProduct = state.products.find(product => product.id=== action.id)
        console.log(addedProduct)
        return {
            ...state,
            products:state.products.map(product => {
            if(product.id === action.id&& product.stock >0) {
                return {
                ...product,
                stock:product.stock -1
                };
            }
            return product
            }),
            cart:state.cart.concat(addedProduct)
        }
      case "INCREASE":
        return {
          ...state,
          products: state.products.map(product => {
            if (product.id === action.id&& product.counter < product.stock) {
              return {
                ...product,
                counter: product.counter + 1
              };
            }
            return product;
          })
        };
      case "DECREASE":
        return {
          ...state,
          products: state.products.map(product => {
            if (product.id === action.id&& product.counter > 0) {
              return {
                ...product,
                counter: product.counter - 1
              };
            }
            return product;
          })
        };
      default:
        return state;
    }
  };
  
  export default reducer;