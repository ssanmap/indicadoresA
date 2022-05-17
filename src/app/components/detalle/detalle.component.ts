import { IndicadorService } from './../../services/indicador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  loading = false;
  id : string | null = '';
  data : any;


  constructor(
    private indicadorService:IndicadorService,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.loadDetail();
  }

  loadDetail(){
    if(this.id != null){
      this.indicadorService.getIndicator(this.id).subscribe(( res:any ) => {
        setTimeout(() => {
          this.data =  res.serie;
          //console.log('data', res)
          this.loading = true;
        }, 1000);




         // this.totalIndicators = items.length;
        })
    }

  }

}
