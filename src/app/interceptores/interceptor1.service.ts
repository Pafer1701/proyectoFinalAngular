import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Interceptor1Service {

  constructor(private http:HttpClient) { }
  
  intercept(request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {console.log('Paso por el interceptor');
    return next.handle(request);
  }

  getPosts(): any {
    return this.http.get('../assets/json/datos.json')
  }
}
