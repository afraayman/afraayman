import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList:SalesPerson[] = [

   new SalesPerson("Ramesh","singh","ramesh@gmail.com",50000),
   new SalesPerson("mark","sculley","mark@gmail.com",40000),
   new SalesPerson("clarie","murphy","clarie@gmail.com",30000),
   new SalesPerson("john","murphy","john@gmail.com",70000)
   
   ]; 
  constructor() { }

  ngOnInit(): void {
  }

}
