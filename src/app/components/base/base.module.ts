import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppNavigationComponent } from "./app-navigation/app-navigation.component";
import { AppLanguageComponent } from "./app-language/app-language.component";
import { AppLogoComponent } from "./app-logo/app-logo.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AppVersionComponent } from "./app-version/app-version.component";
import { AppSocialComponent } from "./app-social/app-social.component";
import { AngularTechsLogosModule } from "angular-techs-logos";

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppNavigationComponent,
    AppLanguageComponent,
    AppLogoComponent,
    AppSocialComponent,
    AppFooterComponent,
    AppVersionComponent,
  ],
  exports: [
    AppHeaderComponent,
    AppNavigationComponent,
    AppLanguageComponent,
    AppLogoComponent,
    AppSocialComponent,
    AppFooterComponent,
    AppVersionComponent,
  ],
  imports: [CommonModule, RouterModule, AngularTechsLogosModule],
})
export class BaseModule {}
