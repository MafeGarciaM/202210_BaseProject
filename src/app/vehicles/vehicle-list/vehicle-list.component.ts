import { Vehicle } from './../shared/models/vehicle.model';
import { VehiclesService } from './../shared/services/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'cypress/types/bluebird';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  public vehicleList: Vehicle[] = [];
  public brandCount: any = {};

  constructor(private vehicleService: VehiclesService) {}

  ngOnInit() {
    this.fillVehiclesList();
  }

  private fillVehiclesList(): void {
    this.vehicleService.getAllVehicles().subscribe((vehicleList: Vehicle[]) => {
      this.vehicleList = vehicleList;
      console.log(this.vehicleList);
      this.getBrandCount(vehicleList);
    });
  }

  public getBrandCount(vehicles: Vehicle[]) {
    for (let vehicle of vehicles) {
      if (!this.brandCount.hasOwnProperty(vehicle.marca)) {
        this.brandCount[vehicle.marca] = 1;
      } else {
        this.brandCount[vehicle.marca] += 1;
      }
    }
    console.log(this.brandCount);
  }
}
