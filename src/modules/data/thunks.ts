import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { DataAction } from './types';
import { getFeeds } from '../../api/feedApi';
import { getDataAsync } from './actions';
import { AxiosError } from 'axios';

export function getDataThunk(): ThunkAction<void, RootState, null, DataAction> {
  return async dispatch => {
    const { request, success, failure } = getDataAsync;
    dispatch(request());
    try {
      const data = await getFeeds();
      setTimeout(() => dispatch(success(data)), 500);
    } catch (e) {
      dispatch(failure((e as unknown as AxiosError)));
    }
  }
}