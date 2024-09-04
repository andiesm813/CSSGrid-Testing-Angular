import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { CSSGridSample2MinHeightComponent } from './css-grid-sample2-min-height.component';

describe('CSSGridSample2MinHeightComponent', () => {
  let component: CSSGridSample2MinHeightComponent;
  let fixture: ComponentFixture<CSSGridSample2MinHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CSSGridSample2MinHeightComponent, NoopAnimationsModule, FormsModule, IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSGridSample2MinHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
