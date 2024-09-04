import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { CSSGridSample1Component } from './css-grid-sample1/css-grid-sample1.component';
import { FlexLayoutSample1Component } from './flex-layout-sample1/flex-layout-sample1.component';
import { CSSGridSample2Component } from './css-grid-sample2/css-grid-sample2.component';
import { FlexLayoutSample2Component } from './flex-layout-sample2/flex-layout-sample2.component';
import { CSSGridSample1SpanIssueComponent } from './css-grid-sample1-span-issue/css-grid-sample1-span-issue.component';
import { CSSGridSample2MinHeightComponent } from './css-grid-sample2-min-height/css-grid-sample2-min-height.component';
import { CSSGridSample3OverflowComponent } from './css-grid-sample3-overflow/css-grid-sample3-overflow.component';
import { MasterViewComponent } from './master-view/master-view.component';
import { FlexLayoutSample3OverflowComponent } from './flex-layout-sample3-overflow/flex-layout-sample3-overflow.component';

export const routes: Routes = [
  { path: '', redirectTo: 'css-grid-sample1', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'css-grid-sample1', component: CSSGridSample1Component, data: { text: 'CSS Grid Sample 1' } },
  { path: 'flex-layout-sample1', component: FlexLayoutSample1Component, data: { text: 'Flex Layout Sample 1' } },
  { path: 'css-grid-sample2', component: CSSGridSample2Component, data: { text: 'CSS Grid Sample 2' } },
  { path: 'flex-layout-sample2', component: FlexLayoutSample2Component, data: { text: 'Flex Layout Sample 2' } },
  { path: 'css-grid-sample1-span-issue', component: CSSGridSample1SpanIssueComponent, data: { text: 'CSS Grid Sample 1 - Span Issue' } },
  { path: 'css-grid-sample2-min-height', component: CSSGridSample2MinHeightComponent, data: { text: 'CSS Grid Sample 2 - MinHeight' } },
  { path: 'css-grid-sample3-overflow', component: CSSGridSample3OverflowComponent, data: { text: 'CSS Grid Sample 3 - Overflow' } },
  { path: 'master-view', component: MasterViewComponent, data: { text: 'Master View' } },
  { path: 'flex-layout-sample3-overflow', component: FlexLayoutSample3OverflowComponent, data: { text: 'Flex Layout Sample 3 - Overflow' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
