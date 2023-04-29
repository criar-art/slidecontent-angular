import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';

import { AboutRoutingModule } from './about-routing.module';
import { SlideModule } from '../../modules/slide/slide.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SlideModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
