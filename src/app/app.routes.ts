import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
            import('@ng-cms/cms-admin').then((m) => m.CmsAdminModule),
    },
];
