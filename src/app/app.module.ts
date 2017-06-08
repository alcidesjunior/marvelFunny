import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MarvelProvider } from '../providers/marvel-provider';
import { AuthProvider } from '../providers/auth-provider';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AvengersPage } from '../pages/avengers/avengers';
import { AvengersModal } from '../pages/avengers/modal/avengers-modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyA9853YUbX2bDVZ40VMr2RkKKx9tUNY3Xg",
  authDomain: "marvelfunny-2539f.firebaseapp.com",
  databaseURL: "https://marvelfunny-2539f.firebaseio.com",
  projectId: "marvelfunny-2539f",
  storageBucket: "marvelfunny-2539f.appspot.com",
  messagingSenderId: "317404058609"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    AvengersPage,
    AvengersModal,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    AvengersPage,
    AvengersModal,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelProvider,
    AuthProvider
  ]
})
export class AppModule {}
