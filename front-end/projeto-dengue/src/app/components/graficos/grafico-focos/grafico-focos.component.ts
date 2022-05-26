import { BehaviorSubject } from 'rxjs';
import { FocoServiceService } from './../../../services/foco/foco-service.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData, ChartEvent, Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico-focos',
  templateUrl: './grafico-focos.component.html',
  styleUrls: ['./grafico-focos.component.scss']
})
export class GraficoFocosComponent implements OnInit {

  hasLoaded$ = new BehaviorSubject<boolean>(false);

  listaFocosPorBairro$ : number[] = [];
  listaNomesBairros$: string[] = [];
  isLoadedFocos: boolean = false;
  isLoadedNames: boolean = false;

  constructor(private focosApi: FocoServiceService) { }
  chart: any;

  ngOnInit(): void
  {
    this.focosApi.getQtdFocosPorBairro().subscribe(
      (data) => {
        this.hasLoaded$.next(true);
        this.listaFocosPorBairro$ = data;
        this.isLoadedFocos = true;
     }
   )

   this.focosApi.getNomeBairros().subscribe(
    (data) => {
      this.hasLoaded$.next(true);
      this.listaNomesBairros$ = data;
      this.isLoadedNames = true;
    }
  )

    this.showChart();
    setTimeout(() => this.showChart(), 2000);
  }

  showChart()
  {
    this.chart = document.getElementById('my_first_chart')
    Chart.register(...registerables);
    this.loadChart();
  }


  loadChart() : void
  {
    new Chart(this.chart, {
      type: 'bar',
      data: {
        labels: this.listaNomesBairros$,
        datasets: [
          {
            label: 'Quantidade de casos',
            data: this.listaFocosPorBairro$,
            borderColor:  '#79c7d9',
            backgroundColor: '#79c7d9',
            hoverBackgroundColor: '#79c7d9',
            hoverBorderColor: '#79c7d9',
          }
        ]
      },
      options: {
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 1,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Quantidade de focos por bairro em Blumenau'
          }
        }
      }
    });
  }


}
