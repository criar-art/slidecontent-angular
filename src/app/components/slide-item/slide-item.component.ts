import { Component, OnInit, Input } from "@angular/core";
import * as uuid from "uuid";

@Component({
  selector: "app-slide-item",
  templateUrl: "./slide-item.component.html",
  styleUrls: ["./slide-item.component.scss"],
})
export class SlideItemComponent implements OnInit {
  @Input("actived") actived: boolean;
  @Input("title") title: string;
  @Input("img") img: string;
  @Input("url") url: string;
  @Input("target") target: string;
  slideId: string;

  constructor() {
    this.slideId = "slide-id-" + uuid.v4();
  }

  ngOnInit() {}
}
