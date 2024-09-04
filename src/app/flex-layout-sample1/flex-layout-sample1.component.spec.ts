import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular';
import { FlexLayoutSample1Component } from './flex-layout-sample1.component';

describe('FlexLayoutSample1Component', () => {
  let component: FlexLayoutSample1Component;
  let fixture: ComponentFixture<FlexLayoutSample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FlexLayoutSample1Component, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexLayoutSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
