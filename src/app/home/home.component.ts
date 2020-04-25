import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../common/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService) { }

  ngOnInit() {}

  googleLogin() {
    this.authService.startGoogleSignIn();
  }

  onLearnMoreClick() {
    this.router.navigate(['/learn-more'])
      .catch(console.error);
  }
}
