import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlideItemComponent } from './slide-item.component';

describe('SlideItemComponent', () => {
  let component: SlideItemComponent;
  let fixture: ComponentFixture<SlideItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
