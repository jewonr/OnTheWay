import { createReducer } from 'typesafe-actions';
import { DataState, DataAction } from './types';
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from './actions';

const initialState: DataState = {
  content: {
    loading: false,
    error: null,
    data: null
  }
}

const data = createReducer<DataState, DataAction>(initialState, {
  [GET_DATA]: state => ({
    ...state,
    content: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_DATA_SUCCESS]: (state, action) => ({
    ...state,
    content: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  
  [GET_DATA_ERROR]: (state, action) => ({
    ...state,
    content: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default data;