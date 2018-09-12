import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";


import { IonicStorageModule } from "@ionic/storage";
import { SharedModule } from "../share/shared.module";
import { TabsPageModule } from "../pages/tabs-page/tabs-page.module";
import { LoginPageModule } from "../pages/login/login.module";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { FormsModule } from "@angular/forms";



const BuildConfig = {
  preloadModules: true,
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  tabsPlacement: 'bottom',
  pageTransition: 'none'
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    TabsPageModule,
    LoginPageModule,
    SharedModule.forRoot(),
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, BuildConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: BarcodeScanner, useClass: BarcodeScanner}
  ]
})
export class AppModule {
}
