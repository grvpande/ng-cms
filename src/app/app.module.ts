import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CmsAdminModule } from '@ng-cms/cms-admin';
import { StoreModule } from '@ngrx/store';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent],
    imports: [
        BrowserModule,
        CmsAdminModule,
        RouterModule.forRoot(appRoutes, {
            initialNavigation: 'enabledBlocking',
        }),
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
        EffectsModule.forRoot([]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
