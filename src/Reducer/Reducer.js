export const initialState = [
    {
        id: '1',
        name: 'iPad Mini',
        price: 500,
        stock: 2,
        value:0
    },
    {
        id: '2',
        name: 'H&M T-Shirt White',
        price: 10.99,
        stock: 10,
        value:0
    },
    {
        id: '3',
        name: 'Charli XCX - Sucker CD',
        price: 19.99,
        stock: 5,
        value:0
    }
]


const reducer = (state= initialState, action) => {
    switch(action.type) {
        case 'INCREASE':
            return state.map(product => {
                if(product.id === action.id && product.value< product.stock) {
                    return {...product, value: product.value +1}
                }
                return product;
            })
        case 'DECREASE':
            return state.map(product => {
                if(product.id === action.id && product.value >0) {
                    return {...product, value: product.value -1}
                }
                return product;
            })
        default:
            return state;
    }
};

export default reducer;