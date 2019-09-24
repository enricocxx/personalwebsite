import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCodeComponent } from './interest-code.component';

describe('InterestCodeComponent', () => {
  let component: InterestCodeComponent;
  let fixture: ComponentFixture<InterestCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
