import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Scrap } from '../../api/scrapApi';

export type ScrapAction = ActionType<typeof actions>;

export type ScrapState = {
  content: {
    loading: boolean;
    error: Error | null;
    data: Scrap[] | null;
  }
};