import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Champion } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private http: HttpClient) { }

  getChampions() {

    return this.http.get<Champion[]>('https://lol.murlocmate.com/champions');
  }
}
