import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-language',
  templateUrl: './app-language.component.html',
  styleUrl: './app-language.component.scss'
})
export class AppLanguageComponent implements OnInit {
  languages = ['pt-BR', 'en-US', 'es-ES', 'fr-FR', 'ru-RU', 'zh-CN'];
  codeLanguage: string;

  constructor(private languageService: LanguageService, private router: Router, private route: ActivatedRoute) {
    // Monitora as mudanças de rota para atualizar o código de idioma
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Obtém o código de idioma da rota atual
      const segments = this.route.snapshot.url.map(segment => segment.path);
      if (segments.length > 0) {
        this.codeLanguage = segments[0]; // Assume que o código de idioma está no primeiro segmento
      } else {
        this.codeLanguage = 'pt'; // Código de idioma padrão se não estiver presente na URL
      }
    });
  }

  ngOnInit(): void {
    const lang = this.languageService.getLanguage();
    this.languageService.setLanguage(lang);
  }

  isLanguageValid(code: string): boolean {
    const validLanguages = ['en', 'pt', 'es', 'ru', 'zh', 'fr'];
    return validLanguages.includes(code);
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
