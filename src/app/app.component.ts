import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, RouterEvent} from '@angular/router';
import {NavigationService} from './navigation/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Muse - Home');
    this.router.events.subscribe((event: RouterEvent) => {
      if (event.url) {
        if (['/', '/home'].includes(event.url)) {
          this.navigationService.transparentMode();
        } else {
          this.navigationService.darkMode();
        }
      }
      this.navigationService.closeSideBar();
    });
  }
}
