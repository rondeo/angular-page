export interface IProduct {
    name: string;
    feature_point: number;
    story_point: number;
    velocity: number;
    TSP: number;
    sprints: number;
    id: number;  
  } 

  export interface TeamDetails{
    Sr_no:  number;
    name:  string;
    project_name:  string;
    release:  string;
    project_status:  string;
    target_fps:  number;
    fp_closed:  number;
    target_sps: number;
    sp_closed:  number;
    bugs_raised:  number;
    bugs_closed:  number;
  }