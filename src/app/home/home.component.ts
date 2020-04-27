import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../common/services/auth.service';
import {User} from '../common/models/user.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  user: User;
  userChanged: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userChanged = this.authService.userChanged.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userChanged.unsubscribe();
  }

  googleLogin() {
    this.authService.startGoogleSignIn();
  }

  onLearnMoreClick() {
    this.router.navigate(['/learn-more'])
      .catch(console.error);
  }
}
