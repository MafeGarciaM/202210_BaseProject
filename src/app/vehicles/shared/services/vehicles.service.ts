import { environment } from './../../../../environments/environment';
import { Vehicle } from './../models/vehicle.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  public getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(environment.jsonUrl);
  }
}
