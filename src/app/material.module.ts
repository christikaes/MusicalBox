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
  MatSlideToggleModule
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
    MatSlideToggleModule
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
    MatSlideToggleModule
  ],
  declarations: []
})
export class MaterialModule { }
