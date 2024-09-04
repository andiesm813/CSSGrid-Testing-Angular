import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular';
import { CSSGridSample1SpanIssueComponent } from './css-grid-sample1-span-issue.component';

describe('CSSGridSample1SpanIssueComponent', () => {
  let component: CSSGridSample1SpanIssueComponent;
  let fixture: ComponentFixture<CSSGridSample1SpanIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CSSGridSample1SpanIssueComponent, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSGridSample1SpanIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
