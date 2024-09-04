import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { CSSGridSample3OverflowComponent } from './css-grid-sample3-overflow.component';

describe('CSSGridSample3OverflowComponent', () => {
  let component: CSSGridSample3OverflowComponent;
  let fixture: ComponentFixture<CSSGridSample3OverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CSSGridSample3OverflowComponent, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSGridSample3OverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
