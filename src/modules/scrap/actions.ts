import { createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
import { Scrap } from '../../api/scrapApi';

export const GET_SCRAP = 'scrap/GET_SCRAP' as const;
export const GET_SCRAP_SUCCESS = 'scrap/GET_SCRAP_SUCCESS' as const;
export const GET_SCRAP_ERROR = 'scrap/GET_SCRAP_ERROR' as const;

export const getScrapAsync = createAsyncAction(
  GET_SCRAP,
  GET_SCRAP_SUCCESS,
  GET_SCRAP_ERROR
)<undefined, Scrap[], AxiosError>();