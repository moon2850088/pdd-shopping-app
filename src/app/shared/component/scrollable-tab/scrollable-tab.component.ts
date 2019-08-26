import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export  interface TopMenu {
  id: number;
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  @Input() selectedTabLink: string;
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor = 'brown';
  @Output() tabSelected = new EventEmitter();

  
  constructor() { 
  }
  
  ngOnInit() {
  }

  handleSelection(index: number){
      this.tabSelected.emit(this.menus[index])
    }
}
