import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatCardModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
