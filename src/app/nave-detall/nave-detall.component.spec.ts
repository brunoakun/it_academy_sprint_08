import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveDetallComponent } from './nave-detall.component';

describe('NaveDetallComponent', () => {
  let component: NaveDetallComponent;
  let fixture: ComponentFixture<NaveDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveDetallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaveDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
