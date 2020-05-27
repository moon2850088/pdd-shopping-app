import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent, CountDownComponent, FooterComponent, VerticalGridComponent, ProductCradComponent, ProductTileComponent } from './component';
import { GridItemDirective, GridItemImageDirective, GridItemTitleDirective, TagDirective, AvatarDirective } from './directives';
import { AgoPipe } from './pipe';
import { BackButtonComponent } from './component/back-button/back-button.component';
import { DialogModule } from '../dialog/dialog.module';



@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCradComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    DialogModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    VerticalGridComponent,
    ProductCradComponent,
    ProductTileComponent,
    BackButtonComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe,
    FooterComponent,
  ]
})
export class SharedModule { }
