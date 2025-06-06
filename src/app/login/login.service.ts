import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = 'http://localhost:5000/authenticate';

  constructor(private http: HttpClient) {}

  login(mobile: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { mobile, password });
  }
}
