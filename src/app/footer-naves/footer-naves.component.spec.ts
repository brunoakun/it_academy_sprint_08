import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavesComponent } from './footer-naves.component';

describe('FooterNavesComponent', () => {
  let component: FooterNavesComponent;
  let fixture: ComponentFixture<FooterNavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
