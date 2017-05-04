import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CreatePost } from '../pages/home/create/create'
import { Detail } from '../pages/home/detail/detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// configs
import {fireBaseConfig} from './config/firebase'
// modules
import {Limit} from '../pages/home/limit'
// import * as firebase from 'firebase'
import {AngularFireModule} from 'angularfire2'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreatePost,
    Detail,
    Limit
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreatePost,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Detail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
