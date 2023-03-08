import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ListStore } from './reducers';

export const featureKey = 'list';

export const selectFeature = createFeatureSelector<ListStore>(featureKey);

export const selectListData = createSelector(
    selectFeature,
    (state: ListStore) => state.data
);
