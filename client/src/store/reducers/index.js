import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { hotdogReducer } from './hotdogReducer';

export const rootReducer = combineReducers({ form: formReducer, hotdogs: hotdogReducer });
