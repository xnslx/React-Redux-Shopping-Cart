export const initialState = {
    products: [
        {
            id: '1',
            name: 'iPad Mini',
            price: 500,
            stock: 2,
            counter:0
        },
        {
            id: '2',
            name: 'H&M T-Shirt White',
            price: 10.99,
            stock: 10,
            counter:0
        },
        {
            id: '3',
            name: 'Charli XCX - Sucker CD',
            price: 19.99,
            stock: 5,
            counter:0
        }
    ],
    totalPrice:0
}


// const reducer = (state= initialState, action) => {
//     switch(action.type) {
//         case 'INCREASE':
//             return state.products.map(product => {
//                 if(product.id === action.id && product.counter< product.stock) {
//                     return {...product, counter: product.counter +1}
//                 }
//                 return product;
//             })
//         case 'DECREASE':
//             return state.products.map(product => {
//                 if(product.id === action.id && product.counter >0) {
//                     return {...product, counter: product.counter -1}
//                 }
//                 return product;
//             })
//         default:
//             return state;
//     }
// };

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCREASE':
            return {
                ...state,
                products:{
                    ...state.products,
                    [action.productsId]: state.products[action.productsId] +1
                }
            }
        case 'DECREASE':
            return {
                ...state,
                products:{
                   ...state.products,
                   [action.productsId]: state.products[action.productsId] - 1
                }
            }
        default:
            return state;
    }
}


export default reducer;