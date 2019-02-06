import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: any={};

  constructor( private _ActivatedRoute: ActivatedRoute,
               private _HeroesService: HeroesService ) {

    this._ActivatedRoute.params.subscribe( params => {
      // console.log( params['id'] );
      this.heroe=this._HeroesService.getHeroe( params['id']);
    } )
   }
  }
