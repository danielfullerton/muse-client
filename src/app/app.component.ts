import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, RouterEvent} from '@angular/router';
import {NavigationService} from './navigation/navigation.service';
import {LoaderService} from './loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Muse - Home');
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationService.transparentMode();
      this.navigationService.closeSideBar();
    });
    this.loaderService.loadingChanged.subscribe(loading => {
      this.loading = loading;
    });
  }
}
