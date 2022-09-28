import { createReducer } from 'typesafe-actions';
import { ScrapState, ScrapAction } from './types';
import { GET_SCRAP, GET_SCRAP_SUCCESS, GET_SCRAP_ERROR } from './actions';

const initialState: ScrapState = {
  content: {
    loading: false,
    error: null,
    data: null
  }
}

const scrap = createReducer<ScrapState, ScrapAction>(initialState, {
  [GET_SCRAP]: state => ({
    ...state,
    content: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_SCRAP_SUCCESS]: (state, action) => ({
    ...state,
    content: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  
  [GET_SCRAP_ERROR]: (state, action) => ({
    ...state,
    content: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default scrap;