import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestMusicComponent } from './interest-music.component';

describe('InterestMusicComponent', () => {
  let component: InterestMusicComponent;
  let fixture: ComponentFixture<InterestMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
