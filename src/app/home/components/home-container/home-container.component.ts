import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TopMenu} from 'src/app/shared/component';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {

  constructor(private router: Router, private service: HomeService, private route: ActivatedRoute) { }

  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$ : Observable<string>;
  ngOnInit(): void {
    this.topMenus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    );
  }

  handleTabSelected(topMenu: TopMenu) {
      this.router.navigate(['home',topMenu.link]);
    }
}
