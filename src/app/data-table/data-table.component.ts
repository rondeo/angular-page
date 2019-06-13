import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSort, MatTableDataSource,MatPaginator} from '@angular/material';
import {IProduct} from '../modals/productData'
import { merge } from 'rxjs';

import { ServiceService } from '../user/service.service';
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { DeleteDialogComponent } from '../dialogs/delete-dialog/delete-dialog.component';
import { useAnimation } from '@angular/animations';
import { EditDialogComponent } from '../dialogs/edit-dialog/edit-dialog.component';


@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})

export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['team_name', 'feature_point', 'story_point', 'velocity', 'action'];
  dataSource;
  //user:IProduct;

  users: IProduct[];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(
    private userService: ServiceService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: IProduct[]) => {
        this.users = users;
        this.refreshTable();
       // this.dataSource = new MatTableDataSource(users);
        this.dataSource.sort = this.sort;
       // this.dataSource.paginator = this.paginator;
      });
  }

  addNewData(iproduct:IProduct){
    let dialogRef = this.dialog.open(AddDialogComponent, {
      height: "500px",
      width: "350px",
      disableClose: true,
      data: {iproduct: iproduct }
    });
    dialogRef.afterClosed().subscribe(result =>{
      //this.user=result;
      if (result !== 0) {      
      this.users.push(result);
     // this.dataSource = new MatTableDataSource(this.users);
      this.refreshTable();
      console.log(this.users);
      }
    });  
}

deleteData(i: number, team_name: string, feature_point: number):void{
  const dialogRef = this.dialog.open(DeleteDialogComponent, {
    height : '350px',
    width : '350px',
    data:{      
      team_name: team_name,
      feature_point: feature_point,
    }
  });
  dialogRef.afterClosed().subscribe(result =>{
    if(result ===1){
      console.log(result);
      this.users.splice(i, 1);
     // this.dataSource = new MatTableDataSource(this.users);
     this.refreshTable();
    }
  });  
 }

 editData(i:number,team_name:string,feature_point:number,story_point:number,velocity:number){
  let dialogRef = this.dialog.open(EditDialogComponent, {
    height: "500px",
    width: "350px",
    disableClose: true,
    data: {
      team_name :team_name,
      feature_point:feature_point,
      velocity:velocity,
      story_point:story_point
     }
  });
  dialogRef.afterClosed().subscribe(result =>{
    //this.user=result;
    if (result !== 0) {      
    this.users[i]=result;
   // this.dataSource = new MatTableDataSource(this.users);
    this.refreshTable();
    console.log(this.users);
    }
  });  
 }

// Refreshing table is just redifining matDataSource
  public refreshTable(){
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.paginator = this.paginator;
    console.log("page refreshed");
  }
}

