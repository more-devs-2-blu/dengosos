import { Observable } from 'rxjs';
import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { ChartType, ChartData, ChartEvent, Chart, registerables } from 'chart.js';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grafico-casos',
  templateUrl: './grafico-casos.component.html',
  styleUrls: ['./grafico-casos.component.scss']
})
export class GraficoCasosComponent implements OnInit, OnDestroy{

  hasLoaded$ = new BehaviorSubject<boolean>(false);

  listaCasosPorBairro$ : number[] = [];
  listaNomesBairros$: string[] = [];
  isLoadedCasos = false;
  isLoadedNames = false;

  constructor(private pessoasApi: PessoaServiceService,
              private router: Router) { }
  chart: any;

  ngOnInit(): void
  {
    this.pessoasApi.getQtdCasosPorBairro().subscribe(
      (data) => {
        this.hasLoaded$.next(true);
        this.listaCasosPorBairro$ = data;
        this.isLoadedCasos = true;
     }
   )
   this.pessoasApi.getNomeBairros().subscribe(
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
    this.chart = document.getElementById('grafico-casos');
    Chart.register(...registerables);
    this.loadChart();
  }

  async destroyCanva()
  {
    Chart.unregister(this.chart);
    await this.chart.remove();
    if(document.getElementById('grafico-casos')){
      let canvasHtml = document.createElement('canvas');
      canvasHtml.className = 'grafico-casos'
      document.getElementById('grafico-casos')?.appendChild(canvasHtml);
      this.chart = document.getElementById('grafico-casos');
    }
    // this.chart.update();
  }

  async goFocos()
  {
    await this.destroyCanva();
    this.router.navigate(['/grafico-focos']);
  }

  async goFaixa()
  {
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
            data: this.listaCasosPorBairro$,
            borderColor:  '#2c5973',
            backgroundColor: '#2c5973',
            hoverBackgroundColor: '#2c5973',
            hoverBorderColor: '#2c5973',
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
            text: 'Quantidade de casos por bairro em Blumenau'
          }
        }
      }
    });
  }

  ngOnDestroy() {
    this.hasLoaded$ .unsubscribe()
  }
}
