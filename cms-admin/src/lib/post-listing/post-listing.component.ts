import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getList } from './store/actions';
import { selectListData } from './store/selectors';

@Component({
    selector: 'ng-cms-post-listing',
    templateUrl: './post-listing.component.html',
    styleUrls: ['./post-listing.component.scss'],
})
export class PostListingComponent implements OnInit {
    items$ = this.store.select(selectListData);
    constructor(private store: Store) {}

    ngOnInit(): void {
        this.store.dispatch(getList())
    }
}
