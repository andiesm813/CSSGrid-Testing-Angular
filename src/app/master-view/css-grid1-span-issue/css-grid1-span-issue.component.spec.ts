import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES } from '@infragistics/igniteui-angular';
import { CSSGrid1SpanIssueComponent } from './css-grid1-span-issue.component';

describe('CSSGrid1SpanIssueComponent', () => {
  let component: CSSGrid1SpanIssueComponent;
  let fixture: ComponentFixture<CSSGrid1SpanIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CSSGrid1SpanIssueComponent, NoopAnimationsModule, FormsModule, IgxButtonDirective, IgxRippleDirective, IGX_CARD_DIRECTIVES ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CSSGrid1SpanIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
