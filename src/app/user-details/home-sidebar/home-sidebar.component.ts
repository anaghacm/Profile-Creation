import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent implements OnInit {

  public userDetails: any;
  constructor(private _ds: DataService) {
    this.userDetails = this._ds.getUserDetails()
  }

  ngOnInit(): void {
  }

}
