import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { PosterWidgetComponent } from './poster-widget/poster-widget.component';


@NgModule({
  declarations: [
    PosterWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    const posterWidgetComp = createCustomElement(PosterWidgetComponent, { injector });
    customElements.define('poster-widget-angular', posterWidgetComp);

  }
  ngDoBootstrap() {};
}
