import axios from 'axios';
import * as hotdogActionTypes from './hotdogActionTypes';

export const fetchHotdogs = () => {
  return async dispatch => {
    dispatch({ type: hotdogActionTypes.FETCH_HOTDOGS });
    
    axios.get('api/hot-dogs')
      .then(({ data }) => {
        dispatch({ type: hotdogActionTypes.FETCH_HOTDOGS_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: hotdogActionTypes.FETCH_HOTDOGS_ERROR, payload: 'An error occurred!' })
      });
  };
};

export const addHotdog = data => {
  return async dispatch => {
    dispatch({ type: hotdogActionTypes.ADD_HOTDOG });

    axios.post('api/hot-dogs', data)
      .then(({ data }) => {
        dispatch({ type: hotdogActionTypes.ADD_HOTDOG_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: hotdogActionTypes.ADD_HOTDOG_ERROR, payload: 'An error occurred!' });
      });
  };
};

export const updateHotdog = (id, data) => {
  return async dispatch => {
    dispatch({ type: hotdogActionTypes.UPDATE_HOTDOG });

    axios.put(`api/hot-dogs/${id}`, data)
      .then(({ data }) => {
        dispatch({ type: hotdogActionTypes.UPDATE_HOTDOG_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: hotdogActionTypes.UPDATE_HOTDOG_ERROR, payload: 'An error occurred!' });
      });
  };
};

export const deleteHotdog = id => {
  return async dispatch => {
    dispatch({ type: hotdogActionTypes.DELETE_HOTDOG });

    axios.delete(`api/hot-dogs/${id}`)
      .then(() => {
        dispatch({ type: hotdogActionTypes.DELETE_HOTDOG_SUCCESS, payload: id });
      })
      .catch(() => {
        dispatch({ type: hotdogActionTypes.DELETE_HOTDOG_ERROR, payload: 'An error occurred!' });
      });
  };
};