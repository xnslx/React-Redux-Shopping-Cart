export const initialState = {
    products: [
        {
            id: '1',
            name: 'iPad Mini',
            price: '$500',
            stock: '2'
        },
        {
            id: '2',
            name: 'H&M T-Shirt White',
            price: '$10.99',
            stock: '10'
        },
        {
            id: '3',
            name: 'Charli XCX - Sucker CD',
            price: '$19.99',
            stock: '5'
        }
    ],
    totalPrice: ''
}

const reducer = (state= initialState, action) => {
    return {
        
    }
};

export default reducer;