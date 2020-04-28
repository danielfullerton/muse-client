import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavigationService, NavStyle} from './navigation.service';
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

  titleVisible = true;

  user: User;
  userChanged: Subscription;

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.navigationService.stylesChanged.subscribe(styles => {
      this.navBar.nativeElement.style.backgroundColor = styles.backgroundColor;
      this.titleVisible = styles.titleVisible;
    });

    this.navigationService.sideBarClosed.subscribe(() => {
      this.showSideBar = false;
    });

    this.user = this.authService.getUser();
    this.userChanged = this.authService.userChanged.subscribe(user => {
      this.user = user;
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
