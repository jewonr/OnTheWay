import { createAsyncAction } from 'typesafe-actions';
import { Content } from "../../api/feedApi";
import { AxiosError } from 'axios';

export const GET_DATA = 'data/GET_DATA' as const;
export const GET_DATA_SUCCESS = 'data/GET_DATA_SUCCESS' as const;
export const GET_DATA_ERROR = 'data/GET_DATA_ERROR' as const;

export const getDataAsync = createAsyncAction(
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR
)<undefined, Content[][], AxiosError>();

