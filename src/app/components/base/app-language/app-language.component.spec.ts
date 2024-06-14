import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanguageComponent } from './app-language.component';

describe('AppLanguageComponent', () => {
  let component: AppLanguageComponent;
  let fixture: ComponentFixture<AppLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
