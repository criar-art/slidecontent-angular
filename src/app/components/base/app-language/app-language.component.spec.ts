import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppLanguageComponent } from './app-language.component';

describe('AppLanguageComponent', () => {
  let component: AppLanguageComponent;
  let fixture: ComponentFixture<AppLanguageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
