import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Content } from "../../api/feedApi";

export type DataAction = ActionType<typeof actions>;

export type DataState = {
  content: {
    loading: boolean;
    error: Error | null;
    data: Content[][] | null;
  }
};