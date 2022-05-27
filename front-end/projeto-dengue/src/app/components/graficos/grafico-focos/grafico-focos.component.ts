import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FocoServiceService } from './../../../services/foco/foco-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartType, ChartData, ChartEvent, Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico-focos',
  templateUrl: './grafico-focos.component.html',
  styleUrls: ['./grafico-focos.component.scss']
})
export class GraficoFocosComponent implements OnInit, OnDestroy {

  hasLoaded$ = new BehaviorSubject<boolean>(false);

  listaFocosPorBairro$ : number[] = [];
  listaNomesBairros$: string[] = [];
  isLoadedFocos: boolean = false;
  isLoadedNames: boolean = false;

  constructor(private focosApi: FocoServiceService,
              private router: Router) { }
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

    setTimeout(() => this.showChart(), 2000);
  }

  showChart()
  {
    this.chart = document.getElementById('grafico-focos')
    Chart.register(...registerables);
    this.loadChart();
  }

  async destroyCanva()
  {
    Chart.unregister(this.chart);
    await this.chart.remove();
    if(document.getElementById('grafico-focos')){
      let canvasHtml = document.createElement('canvas');
      canvasHtml.className = 'grafico-focos'
      document.getElementById('grafico-focos')?.appendChild(canvasHtml);
      this.chart = document.getElementById('grafico-focos');
    }
    // this.chart.update();
  }

  async goCasos() {
    await this.destroyCanva();
    this.router.navigate(['/grafico-casos']);
  }

  async goFaixa() {
    await this.destroyCanva();
    this.router.navigate(['/grafico-faixa-etaria']);
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



  ngOnDestroy() {
    this.hasLoaded$ .unsubscribe()
  }

}
