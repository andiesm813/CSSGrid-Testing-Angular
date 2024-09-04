import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-css-grid1',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective],
  templateUrl: './css-grid1.component.html',
  styleUrls: ['./css-grid1.component.scss']
})
export class CSSGrid1Component {}
