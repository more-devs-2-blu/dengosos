import { Observable } from 'rxjs';
import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { ChartType, ChartData, ChartEvent, Chart, registerables } from 'chart.js';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-grafico-casos',
  templateUrl: './grafico-casos.component.html',
  styleUrls: ['./grafico-casos.component.scss']
})
export class GraficoCasosComponent implements OnInit{

  hasLoaded$ = new BehaviorSubject<boolean>(false);

  listaCasosPorBairro$ : number[] = [];
  listaNomesBairros$: string[] = [];
  isLoadedCasos = false;
  isLoadedNames = false;

  constructor(private pessoasApi: PessoaServiceService) { }
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

}
