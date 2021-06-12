import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesExtendedComponent } from './movies-extended.component';

describe('MoviesExtendedComponent', () => {
  let component: MoviesExtendedComponent;
  let fixture: ComponentFixture<MoviesExtendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesExtendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
