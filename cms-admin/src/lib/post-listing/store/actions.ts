import { createAction, props } from '@ngrx/store';

export const getList = createAction('[Data]_GET_DATA');

export const getListSuccess = createAction(
  '[Data]_GET_DATA_SUCCESS',
  props<any>()
);
