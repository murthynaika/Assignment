import { DataServiceService } from './data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private service: DataServiceService) { }


  ngOnInit() {
    this.service.getDetails().subscribe((response) => {
      console.log('tt' + response);
    });
  }


  onClick() {
    this.service.getDetails().subscribe((response) => {
      console.log('tt' + response);
    });
  }
}
