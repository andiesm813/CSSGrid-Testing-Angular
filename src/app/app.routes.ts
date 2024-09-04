import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { FlexLayoutSample3OverflowComponent } from './flex-layout-sample3-overflow/flex-layout-sample3-overflow.component';

export const routes: Routes = [
  { path: '', redirectTo: 'master-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'master-view', loadChildren: () => import('./master-view/master-view.routes').then(m => m.routes), data: { text: 'Master View' } },
  { path: 'flex-layout-sample3-overflow', component: FlexLayoutSample3OverflowComponent, data: { text: 'Flex Layout Sample 3 - Overflow' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
