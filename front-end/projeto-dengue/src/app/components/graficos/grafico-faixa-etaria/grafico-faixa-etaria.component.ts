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

  constructor(private pessoasApi: PessoaServiceService) { }
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


}
