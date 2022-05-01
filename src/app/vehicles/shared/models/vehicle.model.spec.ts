import { Vehicle } from './vehicle.model';

describe('Vehicle', () => {
  it('should create an instance', () => {
    expect(
      new Vehicle(
        1,
        'volkswgen',
        'beetle',
        'VU Express',
        2020,
        20000,
        'Gris',
        'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'
      )
    ).toBeTruthy();
  });
});
