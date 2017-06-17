import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from 'app/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent {

  @Input() customer: Customer;

  @Output() shift = new EventEmitter<number>();

  showAddress = true;

  right() {
    this.shift.emit(1);
  }

  left() {
    this.shift.emit(-1);
  }
}
