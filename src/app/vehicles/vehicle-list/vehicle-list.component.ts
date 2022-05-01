import { Vehicle } from './../shared/models/vehicle.model';
import { VehiclesService } from './../shared/services/vehicles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
})
export class VehicleListComponent implements OnInit {
  public vehicleList: Vehicle[] = [];

  constructor(private vehicleService: VehiclesService) {}

  ngOnInit() {
    this.fillVehiclesList();
  }

  private fillVehiclesList(): void {
    this.vehicleService.getAllVehicles().subscribe((vehicleList: Vehicle[]) => {
      this.vehicleList = vehicleList;
      console.log(this.vehicleList);
    });
  }
}
