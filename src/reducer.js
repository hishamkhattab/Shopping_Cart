const reducer = (state,action) => {
    switch(action.type) {
        case 'ERROR':
            return {...state, loading:false,error:true, errorMsg: action.payload}; 
        case 'DISPLAY_CART':
            return {...state, cart:action.payload, loading:false}
        case 'CLEAR_ALL':
            return {...state, cart: []};
        case 'CLEAR_ITEM':
            return {...state, cart: state.cart.filter(item => item.id !== action.payload)};
        case 'CHANGE_AMOUNT':
            let itemCart = state.cart.map(item => {
                if(item.id === action.payload.id && action.payload.text === 'increament') {
                    return {...item, amount: item.amount + 1};
                } else if (item.id === action.payload.id && action.payload.text === 'decreament') {
                    return {...item, amount: item.amount - 1};
                } else {
                    return item;
                }
            }).filter(item => item.amount > 0);
            return {...state, cart:itemCart};
        case 'GET_TOTAL':
            let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem;
                let itemPrice = amount*price;
                cartTotal.amount += amount;
                cartTotal.total += itemPrice;
                return cartTotal;
            }, {
                total:0,
                amount:0
            });

            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                total,
                amount,
            }
        default:
            return state;
    }
};



export {reducer}