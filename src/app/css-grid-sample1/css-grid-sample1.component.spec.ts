import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular';
import { CSSGridSample1Component } from './css-grid-sample1.component';

describe('CSSGridSample1Component', () => {
  let component: CSSGridSample1Component;
  let fixture: ComponentFixture<CSSGridSample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CSSGridSample1Component, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSGridSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
