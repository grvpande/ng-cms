import { Action, createReducer, on } from '@ngrx/store';
import { getListSuccess } from './actions';

export interface ListData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface ListStore {
    data: ListData[];
}

export const initialState: ListStore = {
    data: [],
};

export const listReducer = createReducer(
    initialState,
    on(getListSuccess, (state, { data }) => ({ ...state, data }))
);
