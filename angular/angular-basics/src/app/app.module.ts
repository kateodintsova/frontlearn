import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MultByPipe } from './pipes/mult-by.pipe';

import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
