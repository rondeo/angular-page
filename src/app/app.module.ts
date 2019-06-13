import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { ServiceService } from './user/service.service';
import {HttpClientModule} from '@angular/common/http';
import {MaterialModule} from './material/material.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { EditDialogComponent } from './dialogs/edit-dialog/edit-dialog.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ExpectedDataOutputComponent } from './expected-data-output/expected-data-output.component';
import { ImportedDataComponent } from './dialogs/imported-data/imported-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    EditDialogComponent,
    ExpectedDataOutputComponent,
    ImportedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule  ,
    MaterialModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents:[AddDialogComponent,DeleteDialogComponent,EditDialogComponent,ImportedDataComponent],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
