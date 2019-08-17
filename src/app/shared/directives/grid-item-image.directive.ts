import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})
export class GridItemImageDirective implements OnInit{
    @Input()  appGridItemImage='2rem';
    constructor(private elr: ElementRef, private rd2: Renderer2) {}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.setStyle('grid-area','image');
        this.setStyle('width', this.appGridItemImage);
        this.setStyle('height', this.appGridItemImage);
        this.setStyle('object-fit', 'cover');
    }

    private setStyle(styleName: string, styleValue: string | number){
        this.rd2.setStyle(this.elr.nativeElement, styleName, styleValue);
    }
    @HostListener('click',['$event.target'])
    handleClick(ev) {
        console.log(ev);
    }
}