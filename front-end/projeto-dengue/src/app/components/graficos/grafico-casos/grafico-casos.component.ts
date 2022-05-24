import { PessoaServiceService } from './../../../services/pessoa/pessoa-service.service';
import { ChartType, ChartData, ChartEvent } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-casos',
  templateUrl: './grafico-casos.component.html',
  styleUrls: ['./grafico-casos.component.scss']
})
export class GraficoCasosComponent implements OnInit {

  listaCasosPorRegiao$ : number[] = [];
  listaNomesRegioes$: string[] = [];
  isLoadedCasos: boolean = false;
  isLoadedNames: boolean = false;

  constructor(private pessoasApi: PessoaServiceService) { }

  ngOnInit(): void
  {
    this.atualizarNomesRegioes()
    this.atualizarCasosPorRegiao()
  }

  atualizarCasosPorRegiao()
  {
    // TODO: métodos no back end
    // this.focosApi.???????().subscribe(
    //   (data) => {
    //     this.listaFocosPorRegiao$ = data;
    //     console.log(this.listaFocosPorRegiao$)
    //     console.log(data)

        // console.log('dados do chart agora antes do subscribe')
        // console.log(this.chartData.datasets[0])
        // console.log('igualando as listas')
        // this.chartData.datasets[0].data = this.listaQtdHabitantes$
        // console.log('dados do chart agora depois do subscribe')
        // console.log(this.chartData.datasets[0])
        // this.isLoadedFocos = true;
    //   }
    // )
  }

  atualizarNomesRegioes()
  {
    // // TODO: métodos no back end
    // this.focosApi.???????().subscribe(
    //   (data) => {
    //     this.listaNomesRegioes$ = data;
    //     console.log(this.listaNomesRegioes$)
    //     console.log(data)
    //     this.chartData.labels = this.listaNomesRegioes$;
    //     this.isLoadedNames = true;
    //   }
    // )
  }

  // PolarArea
  polarAreaLegend = true;
  polarAreaChartType: ChartType = 'polarArea';
  polarAreaChartLabels: string[] = this.listaNomesRegioes$;

  chartData: ChartData<'polarArea'> = {
    labels: ['teste', 'teste', 'teste', 'teste'],
    datasets:
    [
      {
        data: [33, 42, 51, 65, 53, 23, 12, 42, 21],
        label: 'Section 1'
      }
    ]
  };

   // events
   public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }
   public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
     console.log(event, active);
   }


}
