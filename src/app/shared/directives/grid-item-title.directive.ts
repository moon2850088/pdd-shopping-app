import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})
export class GridItemTitleDirective implements OnInit{ 

    @Input() appGridItemTitle = '2rem';
    constructor(private elr: ElementRef, private rd2: Renderer2) {
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.rd2.setStyle(this.elr.nativeElement,'grid-area',this.appGridItemTitle);

        
    }
}