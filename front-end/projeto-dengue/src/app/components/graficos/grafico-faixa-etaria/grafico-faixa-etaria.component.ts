import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Chart, registerables } from 'chart.js';
import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-faixa-etaria',
  templateUrl: './grafico-faixa-etaria.component.html',
  styleUrls: ['./grafico-faixa-etaria.component.scss']
})
export class GraficoFaixaEtariaComponent implements OnInit {


  hasLoaded$ = new BehaviorSubject<boolean>(false);
  listaCasosPorIdade$ : number[] = [];
  isLoadedCasos: boolean = false;
  backgroundColor: string[] = [];

  constructor(private pessoasApi: PessoaServiceService, private router: Router) { }
  chart: any;

  ngOnInit(): void
  {
    this.pessoasApi.getQtdCasosPorFaixaEtaria().subscribe(
      (data) => {
        this.hasLoaded$.next(true);
        this.listaCasosPorIdade$ = data;
        this.isLoadedCasos = true;
     }
   )

   setTimeout(() => this.showChart(), 2000);
  }

  showChart()
  {
    this.chart = document.getElementById('grafico-faixa-etaria');
    Chart.register(...registerables);
    this.loadChart();
  }

  async destroyCanva()
  {
    Chart.unregister(this.chart);
    await this.chart.remove();
    if(document.getElementById('grafico-faixa-etaria')){
      let canvasHtml = document.createElement('canvas');
      canvasHtml.className = 'grafico-faixa-etaria'
      document.getElementById('grafico-faixa-etaria')?.appendChild(canvasHtml);
      this.chart = document.getElementById('grafico-faixa-etaria');
    }
    // this.chart.update();
  }


  async goCasos() {
    await this.destroyCanva();
    this.router.navigate(['/grafico-casos']);
  }

  async goFocos() {
    await this.destroyCanva();
    this.router.navigate(['/grafico-focos']);
  }

  loadChart() : void
  {
    new Chart(this.chart, {
      type: 'bar',
      data: {
        labels: ['0-15', '16-30','31-45', '46-60', '61-75', '75+'],
        datasets: [
          {
            label: 'Quantidade de casos',
            data: this.listaCasosPorIdade$,
            borderColor:  '#518ea6',
            backgroundColor: '#518ea6',
            hoverBackgroundColor: '#518ea6',
            hoverBorderColor: '#518ea6',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
            text: ''
          }
        }
      }
    });
  }
  ngOnDestroy() {
    this.hasLoaded$ .unsubscribe()
  }

}
