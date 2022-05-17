import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { IndicadorService } from './../../services/indicador.service';
import { Component, ElementRef, OnInit , SimpleChanges, VERSION} from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})

export class DatosComponent implements OnInit {


  id: any;
  loading = false;
  data: any;
  first:any;
  dateI: any;
  chart: any;
  lastDates: [] = [];
  arrayFecha: any;
  arrayValores: any;

  constructor(
    private indicadorService:IndicadorService,
    private elementRef: ElementRef,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.loadDetail();
  }


  ngOnInit(): void {
    if(this.loading){
      console.log('as')
    }



  // let ctx: any = document.getElementById("lineChart") as HTMLElement;

  }

formatearFecha = (fecha:any) => {
    const fechaNueva = new Date(fecha);
    const opciones:any = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}


  loadDetail(){
    if(this.id != null){
      this.indicadorService.getIndicator(this.id).subscribe(( res:any ) => {
        this.data =  res;
        //console.log('data', this.data)
        if(res != ''){
          setTimeout(() => {
              let primero = this.data.serie[0];
          //    console.log('primero', primero)

              this.dateI = primero.fecha;
              let arrOrdenado = this.data.serie;
           let    pp:any = [];
           let max =    arrOrdenado.map( (max:any) => {
            return   pp.push(max.valor)

              })
              this.first= Math.max(...pp)
             // console.log('arr', this.first)

              this.loading = true;
            }, 1000)


        }

        }),(error: any) => {
          console.log(error)
        }

    }else{
      console.log('error sin id')
    }
  }


  async ngAfterViewInit(){
  if (this.loading == true){
    // console.log('asas')
  }


  }

  ngaftercontentChecked(){
    // console.log(this.loading)
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log('changes', changes)
  }





}
