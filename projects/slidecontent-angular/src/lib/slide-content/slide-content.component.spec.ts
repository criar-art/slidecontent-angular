import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { SlideContent } from "./slide-content.component";

describe("SlideContent", () => {
  let component: SlideContent;
  let fixture: ComponentFixture<SlideContent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SlideContent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
