import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeFacadeService } from '../../services/home-facade.service';
import { HomePageActions } from '../../store/actions/home-page.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(
    private homeFacadeService: HomeFacadeService,
  ) { }


  ngOnInit(): void {
    this.homeFacadeService.dispatch(HomePageActions.enterPage());
  }

  ngOnDestroy(): void {
    this.homeFacadeService.dispatch(HomePageActions.leavePage());
  }

  onDoSomething(event: string): void {
    this.homeFacadeService.dispatch(HomePageActions.someAction({event}));
  }

}
