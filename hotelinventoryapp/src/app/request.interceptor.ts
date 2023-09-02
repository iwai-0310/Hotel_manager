import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request)
    const newRequest = request.clone({ headers: new HttpHeaders({ token: "987654321sabbi" }) })
    if(request.method==='POST'){
      const newRequest = request.clone({ headers: new HttpHeaders({ token: "987654321sabbi" }) })
      return next.handle(newRequest)
    }
    return next.handle(request);
  }
}
