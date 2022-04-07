import {
    CREATE_RR,
    UPDATE_RR,
    DELETE_RR,
    GET_ALL_RRS,
    GET_RR_BY_ID,
  } from "../actions/types";


const initialState = [];

const rrReducer = (state=initialState,action) => {

    const { type, payload } = action;

    switch(type){

        case CREATE_RR:
            return [...state , payload];
        
        case UPDATE_RR:
            return state.map((tuto) => {
                if (tuto.id === payload.id) {
                  return {
                    ...tuto,
                    ...payload,
                  };
                } else {
                  return tuto;
                }
              });

        case DELETE_RR:
            return state.filter(({id}) => id !== payload.id);
        
        case GET_ALL_RRS:
            return payload;  
                
        case GET_RR_BY_ID:
            return payload;        
            
        default:
            return state;    

    }

}

export default rrReducer