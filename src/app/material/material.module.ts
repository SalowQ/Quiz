import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    GoogleSigninButtonModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    GoogleSigninButtonModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
})
export class MaterialModule {}
