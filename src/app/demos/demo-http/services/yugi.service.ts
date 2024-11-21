import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {YugiResult} from '../../../shared/models/yugi.model';

@Injectable({
  providedIn: 'root'
})
export class YugiService {

  constructor(
    private http: HttpClient,
  ) { }

  getCards(url: string): Observable<YugiResult> {
    return this.http.get<YugiResult>(url);

  }
}
