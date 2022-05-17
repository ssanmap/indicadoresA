import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data:any = '';
  arrayValores :any;
  arrayFecha :any;
  dataLoaded=false;
  lineChartData:any;
  lineChartLabels:any;

  constructor(
    private elementRef:ElementRef
  ) { }

  ngOnInit(): void {

    const serie = this.data.serie.reduce( (acc: { valores: any[]; labels: string[]; }, cur: { valor: any; fecha: string | number | Date; }) => {
      acc.valores.push(cur.valor);
      acc.labels.push(new Date(cur.fecha).toLocaleDateString());
      return acc;
    } , { valores: [], labels: []});
    this.dataLoaded = true;
    this.lineChartData = [{ data: serie.valores.reverse(), label: this.data.nombre }]
    this.lineChartLabels = serie.labels.reverse().splice(-10);
    this.arrayValores =  serie.valores.sort(function(a: number, b: number){return b - a}).slice(0,10);
    //console.log('serie', (this.arrayValores)) ;

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

ngAfterContentInit(){


    let ctx: any = document.getElementById("lineChart") as HTMLElement;
    var data = {
      labels:  this.lineChartLabels,
      datasets: [
        {
          label: "Ultimos 10 dias ",
          data: this.arrayValores,
          backgroundColor: "blue",
          borderColor: "lightblue",
          fill: false,
          lineTension: 0,
          radius: 5
        }
      ]
    };

    //options
    var options = {
      responsive: true,
      title: {
        display: true,
        position: "top",
        text: "Line Graph",
        fontSize: 18,
        fontColor: "#111"
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#333",
          fontSize: 16
        }
      }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
      type: "line",
      data :  data,
      options: options
    });


  }

}
