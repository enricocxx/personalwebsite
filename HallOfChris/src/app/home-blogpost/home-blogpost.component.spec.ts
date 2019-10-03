import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlogpostComponent } from './home-blogpost.component';

describe('HomeBlogpostComponent', () => {
  let component: HomeBlogpostComponent;
  let fixture: ComponentFixture<HomeBlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
