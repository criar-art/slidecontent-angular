import { Component, OnInit, Input } from "@angular/core";
import * as uuid from "uuid";

@Component({
  selector: "slide-item",
  templateUrl: "./slide-item.component.html",
  styleUrls: ["./slide-item.component.scss"],
})
export class SlideItem implements OnInit {
  @Input("actived") actived: boolean;
  @Input("title") title: string;
  @Input("img") img: string;
  @Input("url") url: string;
  @Input("target") target: string;
  @Input("titleHidden") titleHidden: boolean;
  slideId: string;

  constructor() {
    this.slideId = "slide-id-" + uuid.v4();
  }

  ngOnInit() {}
}
