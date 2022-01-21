import React,{useContext, useEffect, useReducer} from 'react'
import {reducer} from './reducer'
import cartItem from './data'

const AppContext = React.createContext(null);
const url = 'https://course-api.com/react-useReducer-cart-project';
const initialState = {
    loading: true,
    error: false,
    errorMsg: 'Something went wrong',
    cart: [],
    amount:0,
    total:0
};



const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const clearAll = () => {
        dispatch({type:'CLEAR_ALL'});
    };

    const clearItem = (id) => {
        dispatch({type:'CLEAR_ITEM', payload:id});
    };

    const changeAmout = (id,text) => {
        dispatch({type:'CHANGE_AMOUNT', payload:{id,text}});
    };


    useEffect( () => {
        fetch(url)
            .then(response => response.json())
            .then(cartData => {
                dispatch({type:'DISPLAY_CART', payload: cartData});
            })
            .catch(err => {
                dispatch({type:'ERROR', payload: err.message})
            });
    },[])



    useEffect( () => {
        dispatch({type:'GET_TOTAL'});
    },[state.cart]);
    
    return (
        <AppContext.Provider value={{
            ...state,
            clearAll,
            clearItem,
            changeAmout,
        } }>
            {children}
        </AppContext.Provider>
    )
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export {ContextProvider,useGlobalContext}

