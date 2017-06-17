import { Component, Input } from '@angular/core';
import { Address } from 'app/customer.model';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.css']
})
export class CustomerAddressComponent {
  @Input() address: Address;

  regions = ['East', 'North', 'West', 'South', 'Midwest'];
  states = ['California', 'Quebec', 'Jalisco', 'Illinois'];
}
