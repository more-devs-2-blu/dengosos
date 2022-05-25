import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { ChartType, ChartData, ChartEvent, Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-casos',
  templateUrl: './grafico-casos.component.html',
  styleUrls: ['./grafico-casos.component.scss']
})
export class GraficoCasosComponent implements OnInit {

  listaCasosPorBairro$ : number[] = [];
  listaNomesBairros$: string[] = [];
  isLoadedCasos: boolean = false;
  isLoadedNames: boolean = false;
  backgroundColor: string[] = [];

  constructor(private pessoasApi: PessoaServiceService) { }
  chart: any;

  ngOnInit(): void
  {
    this.atualizarNomesRegioes();
    this.atualizarCasosPorBairro();
    this.setBarColors();
    this.showChart();
  }

  showChart()
  {
    this.chart = document.getElementById('my_first_chart')
    Chart.register(...registerables);
    this.loadChart();
    this.chart.update();
  }

  atualizarCasosPorBairro()
  {
     this.pessoasApi.getQtdCasosPorBairro().subscribe(
       (data) => {
         this.listaCasosPorBairro$ = data;
         this.isLoadedCasos = true;
         this.setBarColors();
      }
    )
  }

  atualizarNomesRegioes()
  {
    this.pessoasApi.getNomeBairros().subscribe(
       (data) => {
         this.listaNomesBairros$ = data;
         this.isLoadedNames = true;
      }
    )
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
            borderColor:  this.backgroundColor,
            backgroundColor: this.backgroundColor,
            hoverBackgroundColor: this.backgroundColor,
            hoverBorderColor: this.backgroundColor,
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

  calcularQtdCasosMedia()
  {
    var numeroTotalCasos: number = 0;
    var iterador: any;
    for(iterador in this.listaCasosPorBairro$)
    {
      numeroTotalCasos+= this.listaCasosPorBairro$[iterador];
    }
    var media = numeroTotalCasos / this.listaNomesBairros$.length;
    return media;
  }

  setBarColors()
  {
    var media = this.calcularQtdCasosMedia();
    var qtdCasos: any;
      for (qtdCasos in this.listaCasosPorBairro$)
      {
        if (this.listaCasosPorBairro$[qtdCasos] > media)
        {
           this.backgroundColor.push('#D4080C');
        }
        else if (this.listaCasosPorBairro$[qtdCasos] < media)
        {
           this.backgroundColor.push('#F29200');
        }
      }
  }
}
