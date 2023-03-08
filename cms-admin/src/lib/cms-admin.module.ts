import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListingComponent } from './post-listing/post-listing.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { listReducer } from './post-listing/store/reducers';
import { ListService } from './post-listing/store/service';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { EffectsModule } from '@ngrx/effects';
import { ListEffects } from './post-listing/store/effects';

@NgModule({
    declarations: [PostListingComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('list', listReducer),
        EffectsModule.forFeature([ListEffects]),
    ],
    providers: [ListService],
})
export class CmsAdminModule {}
