import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular';
import { CSSGrid1Component } from './css-grid1.component';

describe('CSSGrid1Component', () => {
  let component: CSSGrid1Component;
  let fixture: ComponentFixture<CSSGrid1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CSSGrid1Component, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
