

import RrsService from "../../services/RrsService";
import {
  CREATE_RR,
  UPDATE_RR,
  DELETE_RR,
  GET_ALL_RRS,
  GET_RR_BY_ID,
} from "../actions/types";



/////////////////////////////////////////////
export const createRr = (extensionNo, customer, location) => async (dispatch) => {
    
    try {
      const res = await RrsService.createRr({extensionNo, customer, location});
  
      dispatch({
        type: CREATE_RR,
        payload: res.data.payload[0],
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
 ///////////////////////////////////////////// 


  export const retrieveRrs = () => async (dispatch) => {
    try {
      return await RrsService.getAllRrs().then((res)=>{

        dispatch({
          type: GET_ALL_RRS,
          payload: res.data,
        });

      })
        
    } catch (err) {
      console.log(err);
    }
  };
/////////////////////////////////////////////////
  export const updateRr = (id, data) => async (dispatch) => {
    try {
      const res = await RrsService.updateRr(id, data);
  
      dispatch({

        type: UPDATE_RR,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  //////////////////////////////////////////////
  export const deleteRr = (id) => async (dispatch) => {
    try {
      await RrsService.deleteRr(id);
       
      dispatch({
        type: DELETE_RR,
        payload: { id },
      });
    }catch (err) {
      console.log(err);
    }
  };
  //////////////////////////////////////////////////////
  export const getRrById = (id) => async (dispatch) => {
    try {
     const res = await RrsService.getRrById(id);
  
      dispatch({
        type: GET_RR_BY_ID,
        payload: res.data.payload[0],
      });
    } catch (err) {
      console.log(err);
    }
  };