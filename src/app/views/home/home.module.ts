import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaseModule } from "src/app/components/base/base.module";

import { HomeComponent } from "./home.component";

import { HomeRoutingModule } from "./home-routing.module";
// import { SlideContentAngular } from '../../../../projects/slidecontent-angular/src/public-api';
import { SlideContentAngular } from "slidecontent-angular";

@NgModule({
  declarations: [HomeComponent],
  imports: [SlideContentAngular, CommonModule, HomeRoutingModule, BaseModule],
})
export class HomeModule {}
