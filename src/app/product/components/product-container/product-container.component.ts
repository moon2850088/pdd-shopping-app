import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { OrderService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductVariant } from '../../domian';
import { filter, map, switchMap} from 'rxjs/operators';
import { DialogService } from 'src/app/dialog';
import { ProductVariantDialogComponent } from '../product-variant-dialog/product-variant-dialog.component';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductContainerComponent implements OnInit {

  variants$: Observable<ProductVariant[]>;
  selectedIndex = 0;
  constructor(private router: Router, private route: ActivatedRoute, 
              private service: OrderService, private dialogService: DialogService) { }

  ngOnInit() {
    const productId$ = this.route.paramMap.pipe(
      filter(params => params.has('productId')),
      map(params => params.get('productId')),
    );
    this.variants$ = productId$.pipe(
      switchMap(productId => this.service.getProductVariantsByProductId(productId)),
      );

  }

  handleDirectBuy(variants: ProductVariant){}

  handleGroupBuy(variants: ProductVariant){
    const top = 40;
    // Subject is Observable and also it is a observer
    // Subject can next (xxx) and subscribe 
    // Behavior Subject is a special statement of Subject
    const formSubmitted = new EventEmitter();
    formSubmitted.subscribe(ev => {
      console.log(ev);
      this.dialogService.saveData(ev);
      this.router.navigate(['/order','confirm']);
    });

    const selected = new EventEmitter();

    selected.subscribe(ev => {
      console.log(ev);
      this.selectedIndex = ev;
    });

    this.dialogService.open(ProductVariantDialogComponent, {
      inputs: {
        variants,
        selectedVariantIndex: this.selectedIndex
      }, outputs: {
        formSubmitted,
        selected,
      }, position: { top: `${top}%`, left: '0', width: '100%', height: `${100 -top}%`
      }
    });
  }
  

}
