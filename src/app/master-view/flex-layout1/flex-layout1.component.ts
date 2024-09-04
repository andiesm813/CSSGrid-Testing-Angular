import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-flex-layout1',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective],
  templateUrl: './flex-layout1.component.html',
  styleUrls: ['./flex-layout1.component.scss']
})
export class FlexLayout1Component {}
