import { TourEvent } from './../../interfaces/TourEvent';
import { Vuelos } from './../../interfaces/Vuelos';
import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shopping-summary',
  templateUrl: './shopping-summary.component.html',
  styleUrls: ['./shopping-summary.component.scss']
})
export class ShoppingSummaryComponent implements OnInit, OnChanges{
  @Input('selectedFlight') selectedFlight: Vuelos;
  arrayFlights: Vuelos[] = new Array<Vuelos>();
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {    
    console.log(this.selectedFlight);
    console.log(this.arrayFlights);

    if(this.selectedFlight !== undefined){
      this.arrayFlights = [];
      this.arrayFlights.push(this.selectedFlight);
    }
  }
}
