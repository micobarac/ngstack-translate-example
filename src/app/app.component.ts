import { Component, OnInit } from '@angular/core';
import { TitleService, TranslateService } from '@ngstack/translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(private titleService: TitleService, private translate: TranslateService) {
    translate.activeLangChanged.subscribe((event: { previousValue: string; currentValue: string }) => {
      console.log(event.previousValue);
      console.log(event.currentValue);
    });
  }

  ngOnInit() {
    this.titleService.setTitle('App.Title');
  }

  get lang(): string {
    return this.translate.activeLang;
  }

  set lang(lang: string) {
    this.translate.activeLang = lang;
  }
}
