import { Component, OnInit } from '@angular/core';

import { BurgersService } from '../../Swagger/api/burgers.service';
import { Burger } from '../../Swagger/model/models'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  burgers : Burger[]

  constructor(private burgersService: BurgersService) { }

  ngOnInit(): void {0
    this.burgersService.listBurgers().subscribe(
      burgers => this.burgers = burgers
    )
  }

}
