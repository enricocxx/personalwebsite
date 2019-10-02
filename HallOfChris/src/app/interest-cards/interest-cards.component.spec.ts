import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCardsComponent } from './interest-cards.component';

describe('InterestCardsComponent', () => {
  let component: InterestCardsComponent;
  let fixture: ComponentFixture<InterestCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
