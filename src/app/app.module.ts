import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GojsAngularModule } from 'gojs-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagramModule } from './diagram/diagram.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GojsAngularModule, FormsModule, ReactiveFormsModule, DiagramModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

}
