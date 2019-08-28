import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/component';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { ChangeDetectionStrategy } from '@angular/core';
import { filter, map, tap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ad, Product } from 'src/app/shared/domain';
@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: HomeService, private cd: ChangeDetectorRef) { }

  selectedTabLink$: Observable<string>;

  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  ad$: Observable<Ad>;
  products$: Observable<Product[]>;

  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
        filter( params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      );
    
      this.imageSliders$ = this.service.getBanners();
      this.channels$ = this.service.getChannels();
      this.ad$ = this.selectedTabLink$.pipe(
        switchMap(tab => this.service.getAdByTab(tab)),
        map(ads => ads[0])
      );
      this.products$ = this.selectedTabLink$.pipe(
        switchMap(tab => this.service.getProductsByTab(tab)),
      );
  }

}
