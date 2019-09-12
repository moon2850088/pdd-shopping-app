import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { OrderService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductVariant } from '../../domian';
import { filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {

  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  constructor(private route: ActivatedRoute, private service: OrderService) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId')),
    );
    this.variants$ = productId$.pipe(
      switchMap(productId => this.service.getProductVariantsByProductId(productId)),
      );

  }
  

}
