import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { FlexLayoutSample2Component } from './flex-layout-sample2.component';

describe('FlexLayoutSample2Component', () => {
  let component: FlexLayoutSample2Component;
  let fixture: ComponentFixture<FlexLayoutSample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FlexLayoutSample2Component, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
