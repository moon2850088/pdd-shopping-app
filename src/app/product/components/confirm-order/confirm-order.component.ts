import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { DialogService } from 'src/app/dialog';
import { Observable, Subject, combineLatest, merge} from 'rxjs';
import { map, share } from 'rxjs/operators';
import { ProductVariant } from '../../domian';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmOrderComponent implements OnInit {
  item$: Observable<object | null>;
  constructor(private dialogService: DialogService) { }
  count$ = new Subject<number>();
  totalPrice$: Observable<number>;
  ngOnInit() {
    this.item$ = this.dialogService.getData().pipe(
      share(),
    );
    const unitPrice$ = this.item$.pipe(
      map((item: {variant: ProductVariant; count: number}) => item.variant.price)
    );
    const amount$ = this.item$.pipe(
      map((item: {variant: ProductVariant; count: number}) => item.count)
    );
    const mergedCount$ = merge(amount$, this.count$);
    this.totalPrice$ = combineLatest([unitPrice$,amount$]).pipe(map(([price, amount]) => price * amount));
  }

  handleAmountChange(count: number) {
    this.count$.next(count);

  }

  handlePay(){

  }

}
