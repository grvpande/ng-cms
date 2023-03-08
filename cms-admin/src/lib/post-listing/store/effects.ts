import { Injectable } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import { ListService } from './service';
import { map } from 'rxjs/operators';
import { getList, getListSuccess } from './actions';

@Injectable()
export class ListEffects {
    list$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getList),
            switchMap(() =>
                this.service.loadData().pipe(
                    map((data) =>
                        getListSuccess({
                            type: '[Data]_GET_DATA_SUCCESS',
                            data,
                        })
                    ),
                    catchError(() => of({ type: '[Data]_GET_DATA_ERROR' }))
                )
            )
        )
    );

    constructor(private actions$: Actions, private service: ListService) {}
}
