import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { LocationStrategy } from '@angular/common';

@Component({
    selector: 'app-language',
    templateUrl: './app-language.component.html',
    styleUrl: './app-language.component.scss',
    standalone: false
})
export class AppLanguageComponent implements OnInit {
  languages = ['pt-BR', 'en-US', 'es-ES', 'fr-FR', 'ru-RU', 'zh-CN'];

  constructor(private languageService: LanguageService, private locationStrategy: LocationStrategy) {
  }

  ngOnInit(): void {
    const lang = this.languageService.getLanguage();
    this.languageService.setLanguage(lang);
  }

  isLanguageActive(language: string): boolean {
    const pathBase = this.locationStrategy.getBaseHref();
    return pathBase.startsWith(`/${language.slice(0, 2)}`);
  }

  getUrl(language: string): string {
    return `/${language.slice(0, 2)}/`;
  }

  getImageUrl(language: string): string {
    return `assets/flags/${language}.svg`;
  }

  changeLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
