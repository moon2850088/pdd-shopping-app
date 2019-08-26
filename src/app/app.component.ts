import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TabItem } from './shared/domain';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  selectedIndex$: Observable<number>;
  handleTabSelected(tab:TabItem) {
    this.router.navigate([tab.link]);
  }
  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events
    .pipe(
      filter(ev => ev instanceof NavigationEnd),
      map( (ev: NavigationEnd) => {
        const arr = ev.url.split('/');
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map( path => this.getSelectedIndex(path))
    )
    }

  getSelectedIndex(tab: string) {
    return tab === 'recommand' ? 1 : tab === 'category' ? 2 : tab === 'chat' ? 3 : tab === 'my' ? 4 : 0;
  }
}
