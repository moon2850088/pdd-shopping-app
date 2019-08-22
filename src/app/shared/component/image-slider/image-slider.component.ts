import { Component,
         OnInit, 
         Input, 
         ViewChild, 
         ElementRef,
         Renderer2, 
         AfterViewInit, 
         OnDestroy } from '@angular/core';

export interface ImageSlider {
  id: number,
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  selectedIndex = 0;
  intervalId;
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef;
  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    }

  ngAfterViewInit(): void {

      this.intervalId = setInterval(() => {
        this.rd2.setProperty(this.imgSlider.nativeElement, 
                            'scrollLeft',
                            (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth / this.sliders.length));
      }, this.intervalBySeconds * 1000)
  }

  getIndex(idx: number):number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
    
  }
  handleScroll(ev){
    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    this.selectedIndex = Math.round(ratio);
  }

}
