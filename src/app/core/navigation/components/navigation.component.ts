import { Component, OnInit } from '@angular/core';
import { AuthenticationFacadeService } from '@core/authentication/services/authentication-facade.service';
import { AuthenticationActions } from '@core/authentication/store/actions/authentication-actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;

  constructor(
    private authenticationFacadeService: AuthenticationFacadeService,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authenticationFacadeService.getCurrentAuthState();
  }

  logout(): void {
    this.authenticationFacadeService.dispatch(AuthenticationActions.logout());
  }

}
