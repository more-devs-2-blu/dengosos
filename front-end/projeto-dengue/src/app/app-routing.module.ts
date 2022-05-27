import { ListFocosComponent } from './components/list-focos/list-focos.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { GraficoFaixaEtariaComponent } from './components/graficos/grafico-faixa-etaria/grafico-faixa-etaria.component';
import { GraficoCasosComponent } from './components/graficos/grafico-casos/grafico-casos.component';
import { GraficoFocosComponent } from './components/graficos/grafico-focos/grafico-focos.component';
import { TelaInformacaoComponent } from './components/tela-informacao/tela-informacao.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormFocoComponent } from './components/foco/form-foco/form-foco.component';
import { FormPessoaComponent } from './components/pessoa/form-pessoa/form-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemPessoasComponent } from './components/listagem-pessoas/listagem-pessoas.component';

const routes: Routes = [
  { path: 'cadastro-pessoa', component: FormPessoaComponent },
  { path: 'cadastro-foco', component: FormFocoComponent },

  { path: 'landing-page', component: LandingPageComponent },

  { path: 'tela-informacoes', component: TelaInformacaoComponent },
  {path: 'listagem-pessoas', component: ListagemPessoasComponent},

  { path: 'grafico-focos', component: GraficoFocosComponent },
  { path: 'grafico-casos', component: GraficoCasosComponent },
  { path: 'grafico-faixa-etaria', component: GraficoFaixaEtariaComponent },

  { path: 'list-focos', component: ListFocosComponent },

  { path: 'login', component: TelaLoginComponent },

  { path: '', redirectTo: '/landing-page', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
