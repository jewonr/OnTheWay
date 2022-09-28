import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { ScrapAction } from './types';
import { AxiosError } from 'axios';
import { getScrap } from '../../api/scrapApi';
import { getScrapAsync } from './actions';

export function getScrapThunk(): ThunkAction<void, RootState, null, ScrapAction> {
  return async dispatch => {
    const { request, success, failure } = getScrapAsync;
    dispatch(request());
    try {
      const data = await getScrap();
      setTimeout(() => dispatch(success(data)), 500);
    } catch (e) {
      dispatch(failure((e as unknown as AxiosError)));
    }
  }
}