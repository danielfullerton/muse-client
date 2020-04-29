import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService} from './navigation.service';
import {AuthService} from '../common/services/auth.service';
import {User} from '../common/models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidebar', { static: false })
  sidebarElement: ElementRef;

  @ViewChild('navBar', { static: false })
  navBar: ElementRef;
  showSideBar = false;

  user: User;

  title: string;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.navigationService.sideBarClosed.subscribe(() => {
      this.showSideBar = false;
    });

    this.user = this.authService.getUser();
    this.authService.userChanged.subscribe(user => {
      this.user = user;
    });

    this.title = this.navigationService.getTitle();
    this.navigationService.titleChanged.subscribe(title => {
      this.title = title;
    });
  }

  onContainerClick(event: MouseEvent) {
    const el = event.target as Element;
    if (!this.sidebarElement.nativeElement.contains(el)) {
      this.showSideBar = false;
    }
  }

  onMenuIconClick() {
    this.showSideBar = true;
  }
}
