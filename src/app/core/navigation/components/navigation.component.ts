import { Component, OnInit } from '@angular/core';
import { LoginFacadeService } from '@features/login/services/login-facade.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLoggedIn$: any;

  constructor(
    private loginFacadeService: LoginFacadeService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.loginFacadeService.getLoggedInState();
  }

  logout(): void {
    // Logout
  }

}
