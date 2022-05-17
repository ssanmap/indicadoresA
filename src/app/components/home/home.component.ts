import { IndicadorService } from './../../services/indicador.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading:boolean = false;
  displayedColumns: string[] = ['codigo','valor'];
  totalIndicators = 0;
  datasource:any;
  items:any;

  constructor(
    private indicadorService:IndicadorService
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.indicadorService.getDailyIndicators().subscribe(( res:any ) => {

    setTimeout(() => {
     // console.log('res',res)
      const items = Object.keys(res).reduce( (acc:any, cur:any):Array<any> =>  res[cur].codigo ? [ ...acc, { ...res[cur] } ] : acc , []);
     // console.log(items)
      this.items = items;
      this.loading = true;
    }, 300);



     // this.totalIndicators = items.length;
    })

  }
}
