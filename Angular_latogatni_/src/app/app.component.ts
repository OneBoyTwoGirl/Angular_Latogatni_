/*
 * File: app.component.ts
 * Author: Serényi Zsolt Ödön
 * Copyright: 2022, Serényi Zsolt Ödön
 * Group: Szoft_II_N
 * Date: 2023-01-01
 * Github: https://github.com/OneBoyTwoGirl/
 * Licenc: GNU GPL
*/

import { Component } from '@angular/core';

interface settlement {
  name: string;
  county: string;
  area: number;
  population: number;
}

const settlementArray:settlement[] = [
  {
    name: "Székesfehérvár",
    county: "	Fejér",
    area: 170.89,
    population: 95545
  },
  {
    name: "Szombathely",
    county: "Vas",
    area: 97.5,
    population: 78324
  },
  {
    name: "Sopron",
    county: "Győr-Moson-Sopron",
    area: 169.04,
    population: 62900
  },
  {
    name: "Zalaegerszeg",
    county: "Zala",
    area: 102.42,
    population: 55470
  },
  {
    name: "Sárvár",
    county: "Vas",
    area: 64.65,
    population: 15072
  },
  {
    name: "Lenti",
    county: "Zala",
    area: 73.79,
    population: 7348
  },
  {
    name: "Zalakaros",
    county: "Zala",
    area: 17.17,
    population: 1936
  }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'latogatni';

  containtSettlementArray=settlementArray;

}
