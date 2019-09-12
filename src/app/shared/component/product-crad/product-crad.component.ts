import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../domain';

@Component({
  selector: 'app-product-crad',
  templateUrl: './product-crad.component.html',
  styleUrls: ['./product-crad.component.css']
})
export class ProductCradComponent implements OnInit {

  @Input() product: Product;
  constructor() { }

  ngOnInit() {
  }

}
