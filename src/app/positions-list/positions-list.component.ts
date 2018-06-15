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
    locs: Array<string> = [];
    jts: Array<string> = [];
    position: any;

  constructor(private http: Http) { 
    this.campus = "All Campuses";
    this.jobType = "All Types";
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

      this.jts = Array.from(new Set(this.jobTypes));
      this.jobTypes = this.jts.sort();
      this.jobTypes.unshift('All Types');

      this.locs = Array.from(new Set(this.locations));
      this.locations = this.locs.sort();
      this.locations.unshift('All Campuses');
  });
  }

  ngOnInit() {
  }

}
