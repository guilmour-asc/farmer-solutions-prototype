import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IntroPageModule } from '../pages/intro/intro.module';
import { ConfigProvider } from '../providers/config/config';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { UserProfilePageModule } from '../pages/user-profile/user-profile.module';
import { CategoriesPageModule } from '../pages/categories/categories.module';
import { LoginPageModule } from '../pages/login/login.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { SignupPageModule } from '../pages/signup/signup.module';
import { QuestionnairePageModule } from '../pages/questionnaire/questionnaire.module';
import { MaskDirective } from '../directives/mask/mask';
import { LevelPageModule } from '../pages/level/level.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MaskDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
    IntroPageModule,
    HttpModule,
    SettingsPageModule,
    UserProfilePageModule,
    CategoriesPageModule,
    LoginPageModule,
    SignupPageModule,
    QuestionnairePageModule,
    LevelPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigProvider,
    AuthServiceProvider,
  ]
})
export class AppModule { }
