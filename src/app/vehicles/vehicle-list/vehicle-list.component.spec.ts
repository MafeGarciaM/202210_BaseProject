import { Vehicle } from './../shared/models/vehicle.model';
/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { VehicleListComponent } from './vehicle-list.component';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;

    component.vehicleList = [
      new Vehicle(
        1,
        'volkswgen',
        'beetle',
        'VU Express',
        2020,
        20000,
        'Gris',
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
      ),
      new Vehicle(
        1,
        'Renault',
        'Kangoo',
        'VU Express',
        2017,
        93272,
        'Blanco',
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
      ),
      new Vehicle(
        1,
        'Chevrolet',
        'Aveo',
        'Family',
        2013,
        19500,
        'Gris',
        'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg'
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with rows', () => {
    let tableRows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(3);
  });

  it('should create a table with header', () => {
    let tableHead = fixture.debugElement.queryAll(By.css('thead'));
    expect(tableHead.length).toBe(1);
  });
});
