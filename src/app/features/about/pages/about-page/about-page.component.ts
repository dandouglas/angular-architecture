import { Component, OnInit } from '@angular/core';
import { AboutFacadeService } from '@features/about/services/about-facade.service';
import { AboutPageActions } from '@features/about/store/actions/about-page.actions';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(
    private aboutFacadeService: AboutFacadeService,
  ) { }

  ngOnInit(): void {
    this.aboutFacadeService.dispatch(AboutPageActions.enterPage());
  }

  ngOnDestroy(): void {
    this.aboutFacadeService.dispatch(AboutPageActions.leavePage());
  }

}
