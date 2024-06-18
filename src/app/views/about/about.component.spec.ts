import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three links with correct href attributes', () => {
    const linkElements = fixture.debugElement.queryAll(By.css('.example'));
    expect(linkElements.length).toBe(3);

    const expectedHrefs = [
      'https://slidecontent-vuejs.web.app',
      'https://slidecontent-ember.web.app',
      'https://slidecontent-reactjs.web.app'
    ];

    linkElements.forEach((linkElement, index) => {
      const hrefAttribute = linkElement.nativeElement.getAttribute('href');
      expect(hrefAttribute).toBe(expectedHrefs[index]);
    });
  });

  it('should have three images with correct src attributes and alt text', () => {
    const imageElements = fixture.debugElement.queryAll(By.css('.example img'));
    expect(imageElements.length).toBe(3);

    const expectedSrcAlt = [
      { src: 'assets/logos/logo-vue.svg', alt: 'Vue.js Logo' },
      { src: 'assets/logos/logo-ember.svg', alt: 'Ember Logo' },
      { src: 'assets/logos/logo-react.svg', alt: 'React Logo' }
    ];

    imageElements.forEach((imageElement, index) => {
      const srcAttribute = imageElement.nativeElement.getAttribute('src');
      const altAttribute = imageElement.nativeElement.getAttribute('alt');
      expect(srcAttribute).toBe(expectedSrcAlt[index].src);
      expect(altAttribute).toBe(expectedSrcAlt[index].alt);
    });
  });
});
