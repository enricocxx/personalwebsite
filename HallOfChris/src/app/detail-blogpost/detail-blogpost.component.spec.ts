import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlogpostComponent } from './detail-blogpost.component';

describe('DetailBlogpostComponent', () => {
  let component: DetailBlogpostComponent;
  let fixture: ComponentFixture<DetailBlogpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBlogpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
