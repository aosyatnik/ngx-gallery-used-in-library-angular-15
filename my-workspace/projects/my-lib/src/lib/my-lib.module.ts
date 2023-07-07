import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { LightboxModule } from 'ng-gallery/lightbox';



@NgModule({
  declarations: [
    MyLibComponent
  ],
  imports: [
    LightboxModule
  ],
  exports: [
    MyLibComponent
  ]
})
export class MyLibModule { }
