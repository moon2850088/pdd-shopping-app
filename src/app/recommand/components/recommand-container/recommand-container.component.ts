import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';
import { HomeService } from 'src/app/home/services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recommand-container',
  templateUrl: './recommand-container.component.html',
  styleUrls: ['./recommand-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommandContainerComponent implements OnInit {

  ad$: Observable<Ad>;
  products$: Observable<Product[]>;
  constructor(private service: HomeService) { }

  ngOnInit() {

    this.ad$ = this.service.getAdByTab('men').pipe(
      map(ads => ads[0])
    );
    this.products$ = this.service.getProductsByTab('men').pipe();

  }

}
