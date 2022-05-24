import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormPessoaComponent } from './components/pessoa/form-pessoa/form-pessoa.component';
import { FormFocoComponent } from './components/foco/form-foco/form-foco.component';
import { TelaInformacaoComponent } from './components/tela-informacao/tela-informacao.component';
import { GraficoFocosComponent } from './components/graficos/grafico-focos/grafico-focos.component';
import { GraficoCasosComponent } from './components/graficos/grafico-casos/grafico-casos.component';
import { GraficoFaixaEtariaComponent } from './components/graficos/grafico-faixa-etaria/grafico-faixa-etaria.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    FormPessoaComponent,
    FormFocoComponent,
    TelaInformacaoComponent,
    GraficoFocosComponent,
    GraficoCasosComponent,
    GraficoFaixaEtariaComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
