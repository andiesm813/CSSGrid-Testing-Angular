import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { FlexLayout3OverflowComponent } from './flex-layout3-overflow.component';

describe('FlexLayout3OverflowComponent', () => {
  let component: FlexLayout3OverflowComponent;
  let fixture: ComponentFixture<FlexLayout3OverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FlexLayout3OverflowComponent, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayout3OverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
