# SlidecontentAngular

## Installation

To install the `slidecontent-angular` library via npm, run the following command in your Angular project:

```bash
npm install slidecontent-angular
```

After installation, you'll need to import the `SlideContentModule` into your Angular module to start using the components provided by the library.

## Usage

1. **Importing `SlideContentModule`:**
   In your `AppModule` or the specific module where you want to use the `SlideContent` component, import the `SlideContentModule` as follows:

   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { SlideContentModule } from 'slidecontent-angular';
   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       SlideContentModule // Import the SlideContentModule here
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

2. **Using `SlideContent` and `SlideItem` Components:**

   Once the module is imported, you can use the `app-slide-content` and `app-slide-item` components in your templates. Below is an example:

   ```html
   <app-slide-content
     name="Example 1"
     type="infinite"
     [nav]="true"
     [animation]="{ disabled: true }"
   >
     <app-slide-item
       class="favela"
       [actived]="true"
       i18n-title="@@god_faith"
       title="Faith in God"
       img="assets/faveladascriancas.jpg"
       url="https://github.com/criar-art/slidecontent-angular"
       target="_blank"
     ></app-slide-item>
     
     <app-slide-item
       i18n-title="@@city"
       title="Ermelino Matarazzo"
       img="assets/ermelino.jpg"
       url="https://github.com/criar-art/slidecontent-angular"
       target="_blank"
     ></app-slide-item>
     
     <app-slide-item
       [titleHidden]="true"
       title="Modern Office"
       img="assets/new-york.jpg"
     ></app-slide-item>
     
     <app-slide-item
       [titleHidden]="true"
       title="Moto Life"
       img="assets/motorcycle.jpg"
     ></app-slide-item>
   </app-slide-content>
   ```

### Explanation:

- **`<app-slide-content>`**: The parent component that holds multiple slide items. The attributes include:
  - `name`: A name to identify the slide content.
  - `type`: The type of slide (e.g., "infinite" for continuous scrolling).
  - `nav`: A boolean that determines whether navigation buttons are displayed.
  - `animation`: Controls the animation settings. In this case, animations are disabled.

- **`<app-slide-item>`**: Represents individual items in the slide content. Each item can have attributes such as:
  - `title`: The title of the slide.
  - `img`: The path to the image that will be displayed.
  - `url`: A link the user can visit when clicking on the slide.
  - `target`: Specifies how to open the link (e.g., `_blank` to open in a new tab).
  - `actived`: Marks the slide as active.
  - `titleHidden`: Hides the title if set to `true`.
  - `i18n-title`: Provides internationalization support for the title.
