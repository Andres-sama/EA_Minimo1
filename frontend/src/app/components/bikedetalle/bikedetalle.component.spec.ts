import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikedetalleComponent } from './bikedetalle.component';

describe('BikedetalleComponent', () => {
  let component: BikedetalleComponent;
  let fixture: ComponentFixture<BikedetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikedetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
