import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesListComponent } from './naves-list.component';

describe('NavesListComponent', () => {
  let component: NavesListComponent;
  let fixture: ComponentFixture<NavesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
