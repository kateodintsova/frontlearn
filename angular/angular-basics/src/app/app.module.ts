import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MultByPipe } from './pipes/mult-by.pipe';

import { AppComponent } from './app.component';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
