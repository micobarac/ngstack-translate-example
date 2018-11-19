import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngstack/translate';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function setupTranslateService(service: TranslateService) {
  return () => service.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      translationRoot: '/assets/i18n',
      supportedLangs: ['me', 'en'],
      activeLang: 'me'
    })
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateService,
      deps: [TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
