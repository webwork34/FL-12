import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayFieldComponent } from './play-field/play-field.component';
import { ContainerComponent } from './container/container.component';
import { WelcomPageComponent } from './welcom-page/welcom-page.component';
import { InfoFieldComponent } from './info-field/info-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldComponent,
    ContainerComponent,
    WelcomPageComponent,
    InfoFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
