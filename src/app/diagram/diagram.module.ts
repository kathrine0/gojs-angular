import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GojsAngularModule } from 'gojs-angular';
import { DiagramComponent } from './diagram.component';


@NgModule({
  declarations: [DiagramComponent],
  imports: [CommonModule, GojsAngularModule, FormsModule, ReactiveFormsModule],
  exports: [DiagramComponent],
  providers: [],
})
export class DiagramModule { }
