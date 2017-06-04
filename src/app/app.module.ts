import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ServiceHttp } from '../service/service-http';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs'
import { AvengersPage } from '../pages/avengers/avengers';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AvengersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AvengersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceHttp,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
