import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCommunityComponent } from './interest-community.component';

describe('InterestCommunityComponent', () => {
  let component: InterestCommunityComponent;
  let fixture: ComponentFixture<InterestCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
