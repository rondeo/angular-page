import { Component } from '@angular/core';
import {DataTableComponent} from './data-table/data-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  importData(){
    console.log("import Data is working");
  }
}
