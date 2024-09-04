import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-flex-layout-sample3-overflow',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterLink],
  templateUrl: './flex-layout-sample3-overflow.component.html',
  styleUrls: ['./flex-layout-sample3-overflow.component.scss']
})
export class FlexLayoutSample3OverflowComponent {}
