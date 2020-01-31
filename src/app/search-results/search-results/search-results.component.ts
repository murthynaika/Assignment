import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  /** To store parent component data */
  @Input()
  public searchParam: string;

  /** TO show erroror message */
  public result = true;
  public showDetails = false;

  /** To store lattitude and longiitude */
  public locationData: {};
  public showError: boolean;
  public errorMsg: any;
  constructor(private service: DataService) { }

  ngOnInit() {
  }

  /** To fetch data from server */
  public onClick() {
    this.service.getDetails(this.searchParam).subscribe((response) => {
      if (response.results[0]) {
        this.result = true;
        this.showDetails = true;
        this.locationData = response.results[0].geometry.location;
      } else {
        this.result = false;
        this.showDetails = false;
        this.locationData = {};
      }
    },
      (error: any) => {
        // this can be added in http intercepter(globaly)
        if (error instanceof HttpErrorResponse) {
          switch (error.status) {
            case 401:
              status = 'Unauthorized request' + error.status.toString();
              break;
            case 404:
              status = 'No such resource found- bad request' + error.status.toString();
              break;
            case 403:
              status = 'Forbidden resource ' + error.status.toString();
              break;
            case 404:
              status = 'No such resource found- bad request' + error.status.toString();
              break;
            case 500:
              status = 'Internal server erroror' + error.status.toString();
              break;
            case 503:
              status = 'Service unavailable.' + error.status.toString();
              break;
            case 507:
              status = 'Insufficient Storage.' + error.status.toString();
              break;
            case 511:
              status = 'Network authentication required.' + error.status.toString();
              break;
            case 201:
            case 200:
              status = 'All Right !' + error.status.toString();
              break;
            default:
          }
          this.errorMsg = status;
          this.showError = true;
        }
      }

    );
  }
}
