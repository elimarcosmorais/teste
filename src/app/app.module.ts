import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Popover } from '../pages/popover/popover';
import { ModalLogin } from '../pages/modal-login/modal-login';

@NgModule({
  declarations: [
    MyApp,
    Home,
    Popover,
    ModalLogin
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Popover,
    ModalLogin
  ],
  providers: []
})
export class AppModule {}
