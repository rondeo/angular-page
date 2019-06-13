import { Component, OnInit, Inject } from '@angular/core';
import { TeamDetails } from 'src/app/modals/productData';
// import { ServiceService } from 'src/app/user/service.service';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imported-data',
  templateUrl: './imported-data.component.html',
  styleUrls: ['./imported-data.component.css']
})
export class ImportedDataComponent implements OnInit {

  constructor(
                // private service: ServiceService,
                public dialog: MatDialog,
                private http: HttpClient,
                public dialogRef: MatDialogRef<ImportedDataComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TeamDetails,
              ){ }

  ngOnInit() {
      this.getTeamDetail();
      }
  selected : string ='orange';
  selected1 :' ';
  team_names:TeamDetails[];
  project_names: TeamDetails[];
  api_url:string;

  //getting url
  private readonly API_URL_TEAMNAMES = 'http://localhost:3000/team_names';

  //getting team details
  getTeamDetails(): Observable<TeamDetails[]> {
    return this.http.get<TeamDetails[]>(this.API_URL_TEAMNAMES);
    } 
  getTeamDetail() {
    this.getTeamDetails()
    .subscribe((users: TeamDetails[]) => {
    this.team_names= users;
    this.team_names.sort((a , b) =>
    ('' + a.name).localeCompare(b.name));
    this.team_names.sort();

    });
  //this.getProjectDetail();
  } 

  gettingTeamUrl(){
    console.log('test'+this.selected);
    this.api_url=this.selected;
    this.getProjectDetail();
  }
  //private readonly API_URL_POJECT ='http://localhost:3000/'+ this.api_url;

    //getting project details
  getProjectDetails(){
    console.log('2nd tym'+this.selected);
    //console.log(this.apiurl);
    return this.http.get<TeamDetails[]>('http://localhost:3000/'+this.api_url);
  }


  getProjectDetail(){
    this.getProjectDetails()
    .subscribe((users: TeamDetails[]) => {
    this.project_names= users;
    // this.users.sort((a , b) =>
    // ('' + a.team_name).localeCompare(b.team_name));
    });

  }
    importNewTeam(){
      this.dialogRef.close(this.data);
      console.log(this.selected);
      console.log(this.selected1);
    }
    cancel(){
      this.dialogRef.close(0);
    }

}


