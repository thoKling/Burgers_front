import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BurgersService, BurgerDetail } from 'src/app/Swagger';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  burger : BurgerDetail;

  constructor(    
    private route: ActivatedRoute,
    private burgersService : BurgersService,
    public location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burgersService.burgerDetail(id).subscribe(
      burger => this.burger = burger
    );
  }

}
