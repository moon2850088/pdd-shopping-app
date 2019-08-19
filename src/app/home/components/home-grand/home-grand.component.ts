import { Component, OnInit, Injectable, Injector } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string){

  }
}

@Injectable()
class PurchaseOrder {
  private amount: number;
  constructor(private product: Product) {
  }
}
@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  date = new Date();
  constructor() { }

  ngOnInit() {
    this.date = this.minusDays(new Date(), 2);
    
  }

  minusDays(date: Date, days: number){
    const result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }
}
