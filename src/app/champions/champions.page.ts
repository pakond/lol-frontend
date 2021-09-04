import { Component, OnInit } from '@angular/core';

import { ChampionsService } from './services/champions.service';
import { Champion } from 'src/app/shared/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.page.html',
  styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage implements OnInit {

  champions!: Champion[];
  environment = environment;

  constructor(private championsService: ChampionsService) { }

  ngOnInit() {
    this.championsService.getChampions().subscribe(
      resp => {
        this.champions = resp;
        console.log(this.champions);
      }
    );
  }

}
