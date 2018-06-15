import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Job, SortItem } from '../position.service';

@Component({
  selector: 'app-positions-list',
  templateUrl: './positions-list.component.html',
  styleUrls: ['./positions-list.component.scss']
})
export class PositionsListComponent implements OnInit {

    positions: Array<Job> = [];
    rawData: Array<Job> = [];
    totalPosition: number;
    campus: string;
    jobType: string;
    keywords: string;

    jobTypes: Array<string> = [];
    locations: Array<string> = [];
    position: any;

  constructor(private http: Http) { 
    this.campus = "New Orleans, LA";
    this.jobType = "Staff";
    http.get('./assets/jobs.json').subscribe(values => {
      this.rawData = values.json();
      this.positions = this.rawData;
      this.totalPosition = this.positions.length;
      this.positions.sort(function (a, b) { return (a.open_date < b.open_date) ? 1 : -1; });

      for (this.position in this.rawData) {
          this.jobTypes.push(this.rawData[this.position].employee_type);
          if (this.rawData[this.position].location !== null && this.rawData[this.position].location !== "")
              this.locations.push(this.rawData[this.position].location);
      }
  });
  }

  ngOnInit() {
  }

}
