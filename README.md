# MusicalBox

## [Part 0] New Project
Let's start by creating a new project with: `ng new MusicalBox`

## [Part 1] Configure CLI
Add the following to your angular.json to disable specs when generating new components
```
"schematics": {
        "@schematics/angular:class": {
          "spec": false
        },
        "@schematics/angular:component": {
          "spec": false,
          "styleext": "scss"
        },
        "@schematics/angular:directive": {
          "spec": false
        },
        "@schematics/angular:module": {
          "spec": false
        },
        "@schematics/angular:pipe": {
          "spec": false
        },
        "@schematics/angular:service": {
          "spec": false
        }
      },
```

## [Part 2] Generate components

Let's go ahead and generate the components needed for:
* Music Box
* Music Box List
* Authentication
* Authentication Dialog

You can do this by running `ng generate component music-box` etc

We can go ahead and add all of these to our main `app.component` for now by adding `<app-music-box></app-music-box>` etc.

## [Part 3] Add Material
Time to add some content! A fast way to generate new content is with angular materal. Go ahead and add angular material to our app by running `ng add @angular/material`

Let's setup the theme for our application by updating `styles.scss`. Remember to update your `angular.json` file and restart your server. See: https://material.angular.io/guide/theming
```
@import '~@angular/material/theming';
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat-core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://www.google.com/design/spec/style/color.html
$app-primary: mat-palette($mat-teal);
$app-accent:  mat-palette($mat-pink, A200, A100, A400);

// Create the theme object (a Sass map containing all of the palettes).
$app-theme: mat-dark-theme($app-primary, $app-accent);

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include angular-material-theme($app-theme);
```

We are ready to start importing components into our application!

## [Part 4] Fill out components
Let's start by creating a `material.module`. Run: `ng generate module material --module=app --flat` so that we can import all of our material dependencies in one file.

Import material components like button, checkbox etc in your material.module:
```
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule
  ]
  declarations: []
})
export class MaterialModule { }
```




