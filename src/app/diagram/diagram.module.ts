import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GojsAngularModule } from 'gojs-angular';
import { DiagramComponent } from './diagram.component';


@NgModule({
  declarations: [DiagramComponent],
  imports: [CommonModule, GojsAngularModule],
  exports: [DiagramComponent],
  providers: [],
})
export class DiagramModule { }
