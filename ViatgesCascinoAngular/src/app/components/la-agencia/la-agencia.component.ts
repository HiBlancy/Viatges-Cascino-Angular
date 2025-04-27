import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationHelperService } from '../../servicio/translation-helper.service';

@Component({
  selector: 'app-la-agencia',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './la-agencia.component.html',
  styleUrl: './la-agencia.component.css',
})
export class LaAgenciaComponent {
  currentLanguage = 'es';

  constructor(
    private translate: TranslateService,
    public translationHelper: TranslationHelperService
  ) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }
}
