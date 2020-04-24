import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../common/services/auth.service';
import {User} from '../common/models/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService
  ) { }

  ngOnInit() {}

  googleLogin() {
    this.authService.startGoogleSignIn();
  }

  testAuth() {
    this.authService.testAuth().subscribe((user: User) => {
      this.user = user;
    });
  }
}
