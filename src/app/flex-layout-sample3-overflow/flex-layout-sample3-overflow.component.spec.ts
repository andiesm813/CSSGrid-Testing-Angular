import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { FlexLayoutSample3OverflowComponent } from './flex-layout-sample3-overflow.component';

describe('FlexLayoutSample3OverflowComponent', () => {
  let component: FlexLayoutSample3OverflowComponent;
  let fixture: ComponentFixture<FlexLayoutSample3OverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FlexLayoutSample3OverflowComponent, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutSample3OverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
