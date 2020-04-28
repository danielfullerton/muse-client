import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {API_PROVIDER, IApiProvider} from '../providers/api.provider';

@Injectable()
export class ApiCallInterceptor implements HttpInterceptor {
  constructor(
    @Inject(API_PROVIDER) private readonly api: IApiProvider
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: this.api.apiUrl + req.url,
      withCredentials: true
    });
    return next.handle(req);
  }
}
