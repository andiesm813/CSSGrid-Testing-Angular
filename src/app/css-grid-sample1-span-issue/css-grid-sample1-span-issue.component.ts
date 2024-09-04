import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-css-grid-sample1-span-issue',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective],
  templateUrl: './css-grid-sample1-span-issue.component.html',
  styleUrls: ['./css-grid-sample1-span-issue.component.scss']
})
export class CSSGridSample1SpanIssueComponent {}
