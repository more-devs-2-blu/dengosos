import { Chart, registerables } from 'chart.js';
import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-faixa-etaria',
  templateUrl: './grafico-faixa-etaria.component.html',
  styleUrls: ['./grafico-faixa-etaria.component.scss']
})
export class GraficoFaixaEtariaComponent implements OnInit {

  listaCasosPorIdade$ : number[] = [];
  isLoadedCasos: boolean = false;
  backgroundColor: string[] = [];

  constructor(private pessoasApi: PessoaServiceService) { }
  chart: any;

  ngOnInit(): void
  {
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
         this.listaCasosPorIdade$ = data;
         this.isLoadedCasos = true;
         this.setBarColors();
      }
    )
  }
  loadChart() : void
  {
    new Chart(this.chart, {
      type: 'bar',
      data: {
        labels: this.listaCasosPorIdade$,
        datasets: [
          {
            label: 'Quantidade de casos',
            data: this.listaCasosPorIdade$,
            borderColor:  this.backgroundColor,
            backgroundColor: this.backgroundColor,
            hoverBackgroundColor: this.backgroundColor,
            hoverBorderColor: this.backgroundColor,
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
            display: true,
            text: 'Chart.js Bar Chart'
          }
        }
      }
    });
  }

  calcularQtdCasosMedia()
  {
    var numeroTotalCasos: number = 0;
    var iterador: any;
    for(iterador in this.listaCasosPorIdade$)
    {
      numeroTotalCasos+= this.listaCasosPorIdade$[iterador];
    }
    var media = numeroTotalCasos / this.listaCasosPorIdade$.length;
    return media;
  }

  setBarColors()
  {
    var media = this.calcularQtdCasosMedia();
    var qtdCasos: any;
      for (qtdCasos in this.listaCasosPorIdade$)
      {
        if (this.listaCasosPorIdade$[qtdCasos] > media)
        {
           this.backgroundColor.push('#D4080C');
        }
        else if (this.listaCasosPorIdade$[qtdCasos] < media)
        {
           this.backgroundColor.push('#F29200');
        }
      }
  }

}
