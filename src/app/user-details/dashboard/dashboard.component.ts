import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userDetails: any;

  constructor(private _ds: DataService) {
    this.userDetails = this._ds.getUserDetails()
  }

  ngOnInit(): void {
  }

}
