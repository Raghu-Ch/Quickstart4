import { Component, OnInit } from '@angular/core';

import { Customer } from 'app/customer.model';
import { DataService } from 'app/data.service';
import { LoggerService } from 'app/logger.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  customer: Customer;

  constructor(private dataService: DataService, private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.log('Getting customers');
    this.customers = this.dataService.getCustomers();
  }

  shift(increment: number) {
    let ix = this.customers.findIndex(c => c === this.customer) + increment;
    ix = Math.min(this.customers.length - 1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }
}
