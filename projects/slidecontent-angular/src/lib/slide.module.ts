import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HammerModule } from "@angular/platform-browser";

import { SlideContent } from "./slide-content/slide-content.component";
import { SlideItem } from "./slide-item/slide-item.component";

@NgModule({
  declarations: [SlideContent, SlideItem],
  exports: [SlideContent, SlideItem],
  imports: [CommonModule, HammerModule],
})
export class SlideContentAngular {}
