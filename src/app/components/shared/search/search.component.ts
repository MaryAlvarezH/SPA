import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../../servicios/heroes.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  ArrHeroes: Heroe []=[];
  sTermino: string;

  constructor(private _HeroesService: HeroesService,
              private _ActivatedRouted: ActivatedRoute,
              private _Router: Router) {
               }

  ngOnInit() {
    this._ActivatedRouted.params.subscribe(params=>{
      // console.log(`Parametro: ${params['termino']}`)
      this.sTermino = params['termino'];
      this.ArrHeroes = this._HeroesService.buscarHeroes(params ['termino']);

    })
    
  }

  verHeroe(idx :number){
    this._Router.navigate(['/heroe', idx])
  }

}
