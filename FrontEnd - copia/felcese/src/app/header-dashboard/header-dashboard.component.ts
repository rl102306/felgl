import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../Auth/auth-service.service';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent implements OnInit {

  constructor(private authS: AuthServiceService) { }

  ngOnInit(): void {
  }

  onLogout(){

    this.authS.logout();

  }
}
