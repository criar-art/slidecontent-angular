import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SlideModule } from '../../../../projects/slidecontent-angular/src/public-api';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SlideModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
