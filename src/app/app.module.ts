import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatGridListModule, MatListModule} from '@angular/material';
import { GeneralComponent } from './general/general.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import {CityService} from './city.service';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SocialComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
      MatButtonModule
  ],
  providers: [
    {
      provide: CityService,
      useClass: CityService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
