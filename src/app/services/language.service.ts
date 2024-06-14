import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setLanguage(language: string) {
    localStorage.setItem('appLanguage', language);
    this.document.documentElement.lang = language;
  }

  getLanguage(): string {
    return localStorage.getItem('appLanguage') || 'en';
  }
}
