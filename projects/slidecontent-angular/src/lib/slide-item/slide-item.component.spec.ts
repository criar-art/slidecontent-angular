import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { SlideItem } from "./slide-item.component";

describe("SlideItem", () => {
  let component: SlideItem;
  let fixture: ComponentFixture<SlideItem>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SlideItem],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
