import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule,
  MatTabsModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatIconModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
