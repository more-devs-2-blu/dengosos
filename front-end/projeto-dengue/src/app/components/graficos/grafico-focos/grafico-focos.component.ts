import { FocoServiceService } from './../../../services/foco/foco-service.service';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData, ChartEvent, Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-grafico-focos',
  templateUrl: './grafico-focos.component.html',
  styleUrls: ['./grafico-focos.component.scss']
})
export class GraficoFocosComponent implements OnInit {

  listaFocosPorBairro$ : number[] = [];
  listaNomesBairros$: string[] = [];
  isLoadedFocos: boolean = false;
  isLoadedNames: boolean = false;
  backgroundColor: string[] = [];

  constructor(private focosApi: FocoServiceService) { }
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
      this.focosApi.getQtdFocosPorBairro().subscribe(
        (data) => {
          this.listaFocosPorBairro$ = data;
          this.isLoadedFocos = true;
          this.setBarColors();
       }
     )
  }

  atualizarNomesRegioes()
  {
     this.focosApi.getNomeBairros().subscribe(
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
            data: this.listaFocosPorBairro$,
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
    for(iterador in this.listaFocosPorBairro$)
    {
      numeroTotalCasos+= this.listaFocosPorBairro$[iterador];
    }
    var media = numeroTotalCasos / this.listaNomesBairros$.length;
    return media;
  }

  setBarColors()
  {
    var media = this.calcularQtdCasosMedia();
    var qtdCasos: any;
      for (qtdCasos in this.listaFocosPorBairro$)
      {
        if (this.listaFocosPorBairro$[qtdCasos] > media)
        {
           this.backgroundColor.push('#D4080C');
        }
        else if (this.listaFocosPorBairro$[qtdCasos] < media)
        {
           this.backgroundColor.push('#F29200');
        }
      }
  }
}
