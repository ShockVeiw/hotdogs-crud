import * as hotdogActionTypes from '../actions/hotdogActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null
};

export const hotdogReducer = (state = initialState, action) => {
  switch (action.type) {
    case hotdogActionTypes.FETCH_HOTDOGS: {
      return { data: [], loading: true, error: null };
    };  
    case hotdogActionTypes.FETCH_HOTDOGS_SUCCESS: {
      return { data: action.payload, loading: false, error: null };
    };  
    case hotdogActionTypes.FETCH_HOTDOGS_ERROR: {
      return { data: [], loading: false, error: action.payload };
    };  

    case hotdogActionTypes.ADD_HOTDOG: {
      return { data: [...state.data], loading: true, error: null };
    };  
    case hotdogActionTypes.ADD_HOTDOG_SUCCESS: {
      return { data: [...state.data, action.payload], loading: false, error: null };
    };  
    case hotdogActionTypes.ADD_HOTDOG_ERROR: {
      return { data: [...state.data], loading: false, error: action.payload };
    };  

    case hotdogActionTypes.UPDATE_HOTDOG: {
      return { data: [...state.data], loading: true, error: null };
    };  
    case hotdogActionTypes.UPDATE_HOTDOG_SUCCESS: {
      const updatedHotdogs = [...state.data];
      updatedHotdogs.forEach((el, index) => {
        if (el.id === action.payload.id) {
          updatedHotdogs[index] = action.payload;
          return;
        }
      });     
      return { data: updatedHotdogs, loading: false, error: null };
    };  
    case hotdogActionTypes.UPDATE_HOTDOG_ERROR: {
      return { data: [...state.data], loading: false, error: action.payload };
    };  

    case hotdogActionTypes.DELETE_HOTDOG: {
      return { data: [...state.data], loading: true, error: null };
    };  
    case hotdogActionTypes.DELETE_HOTDOG_SUCCESS: {
      const updatedHotdogs = [...state.data];

      updatedHotdogs.forEach((el, index) => {
        if (el.id === action.payload) return updatedHotdogs.splice(index, 1);
      });

      return { data: updatedHotdogs, loading: false, error: null };
    }; 
    case hotdogActionTypes.DELETE_HOTDOG_ERROR: {
      return { data: [...state.data], loading: false, error: action.payload };
    };    

    default:
      return state;
  };
};