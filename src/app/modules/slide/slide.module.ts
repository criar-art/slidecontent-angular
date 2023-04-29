import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SlideContentComponent } from '../../components/slide-content/slide-content.component';
import { SlideItemComponent } from '../../components/slide-item/slide-item.component';

@NgModule({
  declarations: [
    SlideContentComponent,
    SlideItemComponent,
  ],
  exports: [
    SlideContentComponent,
    SlideItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SlideModule { }
