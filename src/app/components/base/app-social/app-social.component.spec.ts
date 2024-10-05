import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppSocialComponent } from './app-social.component';

describe('AppSocialComponent', () => {
  let component: AppSocialComponent;
  let fixture: ComponentFixture<AppSocialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
