import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImageSlider, Channel } from 'src/app/shared/component';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { ChangeDetectionStrategy } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  channels$: Observable<Channel[]>
  ngOnInit() {
    this.selectedTabLink$ = this.route.paramMap.pipe(
        filter( params => params.has('tabLink')),
        map(params => params.get('tabLink'))
      );
    
      this.imageSliders$ = this.service.getBanners();
      this.channels$ = this.service.getChannels();
  }

}
