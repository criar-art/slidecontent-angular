# SlideContentAngular

## Installation

To install the `slidecontent-angular` library via npm, run the following command in your Angular project:

```bash
npm install slidecontent-angular
```

After installation, you'll need to import the `SlideContentAngular` into your Angular module to start using the components provided by the library.

## Usage

1. **Importing `SlideContentAngular`:**
   In your `AppModule` or the specific module where you want to use the `SlideContent` component, import the `SlideContentAngular` as follows:

   ```typescript
   import { NgModule } from "@angular/core";
   import { BrowserModule } from "@angular/platform-browser";
   import { SlideContentAngular } from "slidecontent-angular";
   import { AppComponent } from "./app.component";

   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       SlideContentAngular, // Import the SlideContentAngular here
     ],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

2. **Using `SlideContent` and `SlideItem` Components:**

   Once the module is imported, you can use the `slide-content` and `slide-item` components in your templates. Below is an example:

   ```html
   <slide-content
    name="Example 1"
    type="infinite"
    [nav]="true"
    [animation]="{ disabled: true }"
   >
     <slide-item
      class="favela"
      [actived]="true"
      i18n-title="@@god_faith"
      title="Faith in God"
      img="assets/faveladascriancas.jpg"
      url="https://github.com/criar-art/slidecontent-angular"
      target="_blank"
    />
     <slide-item
      i18n-title="@@city"
      title="Ermelino Matarazzo"
      img="assets/ermelino.jpg"
      url="https://github.com/criar-art/slidecontent-angular"
      target="_blank"
    />
     <slide-item
      [titleHidden]="true"
      title="Modern Office"
      img="assets/new-york.jpg"
    />
     <slide-item
      [titleHidden]="true"
      title="Moto Life"
      img="assets/motorcycle.jpg"
    />
   </slide-content>
   ```

### Explanation:

- **`<slide-content>`**: The parent component that holds multiple slide items. The attributes include:

  - `name`: A name to identify the slide content.
  - `type`: The type of slide (e.g., "infinite" for continuous scrolling).
  - `nav`: A boolean that determines whether navigation buttons are displayed.
  - `animation`: Controls the animation settings. In this case, animations are disabled.

- **`<slide-item>`**: Represents individual items in the slide content. Each item can have attributes such as:
  - `title`: The title of the slide.
  - `img`: The path to the image that will be displayed.
  - `url`: A link the user can visit when clicking on the slide.
  - `target`: Specifies how to open the link (e.g., `_blank` to open in a new tab).
  - `actived`: Marks the slide as active.
  - `titleHidden`: Hides the title if set to `true`.
  - `i18n-title`: Provides internationalization support for the title.

### :performing_arts: Com quem você pode conversar sobre o projeto?
#### Who can you talk to about the project?
#### ¿Con quién puedes hablar sobre el proyecto?
#### С кем вы можете поговорить о проекте?
#### 誰がプロジェクトについて話すことができますか？
#### À qui pouvez-vous parler du projet?
#### Proje ile ilgili kiminle konuşabilirsin ?
#### 你能谈谈这个项目吗？

* :ghost: @lucasferreiralimax
* :email: lucasferreiralimax@gmail.com
