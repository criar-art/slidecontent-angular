import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppVersionComponent } from './app-version/app-version.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppNavigationComponent,
    AppFooterComponent,
    AppVersionComponent
  ],
  exports: [
    AppHeaderComponent,
    AppNavigationComponent,
    AppFooterComponent,
    AppVersionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BaseModule { }
