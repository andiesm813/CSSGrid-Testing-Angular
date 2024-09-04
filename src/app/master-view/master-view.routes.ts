import { Routes } from '@angular/router';
import { MasterViewComponent } from './master-view.component';
import { CSSGrid1Component } from './css-grid1/css-grid1.component';
import { CSSGrid2Component } from './css-grid2/css-grid2.component';
import { FlexLayout1Component } from './flex-layout1/flex-layout1.component';
import { FlexLayout2Component } from './flex-layout2/flex-layout2.component';
import { CSSGrid1SpanIssueComponent } from './css-grid1-span-issue/css-grid1-span-issue.component';
import { CSSGrid2MinHeightComponent } from './css-grid2-min-height/css-grid2-min-height.component';
import { CSSGrid3OverflowComponent } from './css-grid3-overflow/css-grid3-overflow.component';
import { FlexLayout3OverflowComponent } from './flex-layout3-overflow/flex-layout3-overflow.component';

export const routes: Routes = [{ path: '', component: MasterViewComponent, children: [{ path: '', redirectTo: 'css-grid1', pathMatch: 'full' }, { path: 'css-grid1', component: CSSGrid1Component, data: { text: 'CSS Grid 1' } }, { path: 'css-grid2', component: CSSGrid2Component, data: { text: 'CSS Grid 2' } }, { path: 'flex-layout1', component: FlexLayout1Component, data: { text: 'Flex Layout 1' } }, { path: 'flex-layout2', component: FlexLayout2Component, data: { text: 'Flex Layout 2' } }, { path: 'css-grid1-span-issue', component: CSSGrid1SpanIssueComponent, data: { text: 'CSS Grid 1 - Span Issue' } }, { path: 'css-grid2-min-height', component: CSSGrid2MinHeightComponent, data: { text: 'CSS Grid 2 - Min Height' } }, { path: 'css-grid3-overflow', component: CSSGrid3OverflowComponent, data: { text: 'CSS Grid 3 - Overflow' } }, { path: 'flex-layout3-overflow', component: FlexLayout3OverflowComponent, data: { text: 'Flex Layout 3 - Overflow' } }] }];
