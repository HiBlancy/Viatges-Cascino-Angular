import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationHelperService } from '../../../servicio/translation-helper.service';

@Component({
  selector: 'app-carnaval-venecia',
  imports: [TranslateModule],
  templateUrl: './carnaval-venecia.component.html',
  styleUrl: './carnaval-venecia.component.css'
})
export class CarnavalVeneciaComponent {
  isLoading = true;
  currentLanguage = 'es';

  constructor(private translate: TranslateService, public translationHelper: TranslationHelperService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = lang;
  }

}
