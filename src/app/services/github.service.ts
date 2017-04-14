import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { apiKeys } from '../api/api_key';

@Injectable()
export class GithubService {

  private username: string;
  private client_id = apiKeys.client_id;
  private client_secret = apiKeys.client_secret;

  constructor(private _http: Http) { 
    console.log('Github Service is ready.');
    this.username = 'codyme';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
  }

}
