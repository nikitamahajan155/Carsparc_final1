import { Component, OnInit } from '@angular/core';
import { Router, Route, NavigationStart } from '@angular/router';
import { BookingForMaintenanceService } from './bookingformaintenance.service';
import { Navigation } from 'selenium-webdriver';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bookingformaintenance',
  templateUrl: './bookingformaintenance.component.html',
  styleUrls: ['./bookingformaintenance.component.css'],
  providers: [BookingForMaintenanceService]
})
export class BookingformaintenanceComponent implements OnInit {


  public bookingMaintInfo: any
  public BM: any
  user: {};
  subscription: Subscription;
  constructor(private router: Router, private BM1: BookingForMaintenanceService) {
    const navigation = this.router.getCurrentNavigation();
    const bookingMaintInfo = navigation.extras.state
    this.bookingMaintInfo = JSON.stringify(navigation.extras);
   console.log('=============>'+this.bookingMaintInfo)
  }

public ngOnInit() {

}
}


  //this.BM= console.log(JSON.parse(this.bookingMaintInfo))
  //console.log(this.BM)




