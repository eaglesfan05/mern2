//bring in actions// 
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types';

const initialState = {
    items: [],
    //when retrieving data initially is false
    loading: false
}
// function takes in state which is set to initialState and an action
export default function(state = initialState, action) {
    switch(action.type) {
        //gets initial state.. sets items to the payload from the action and resets loading back to false
        case GET_ITEMS:
            return{
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        case ADD_ITEM:
            return{
                ...state,
                items: [action.payload, ...state.items]
            }
        case ITEMS_LOADING:
            console.log('loading')
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}