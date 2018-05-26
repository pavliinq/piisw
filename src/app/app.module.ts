import {SlowaService} from './slowa/shared/slowa.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {SlowoComponent} from './slowa/slowo/slowo.component';
import {SlowaListaComponent} from './slowa/slowa-lista/slowa-lista.component';
import {DefinicjaComponent} from './definicje/definicja/definicja.component';
import {DefinicjeListaComponent} from './definicje/definicje-lista/definicje-lista.component';
import {FormDodajSlowoComponent} from './slowa/form-dodaj-slowo/form-dodaj-slowo.component';
import {FormDodajDefinicjeComponent} from './definicje/form-dodaj-definicje/form-dodaj-definicje.component';
import {DefinicjeService} from './definicje/shared/definicje.service';
import {KeysPipePipe} from './definicje/shared/keys-pipe.pipe';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {RankingListaComponent} from './ranking/ranking-lista/ranking-lista.component';
import {RankingService} from './ranking/shared/ranking.service';
import {KursyComponent} from './kursy/kursy.component';
import {FormDodajKursComponent} from './kursy/form-dodaj-kurs/form-dodaj-kurs.component';
import {KursyListaComponent} from './kursy/kursy-lista/kursy-lista.component';
import {KursComponent} from './kursy/kurs/kurs.component';
import {KursyService} from './kursy/shared/kursy.service';
import {FormZapiszSieComponent} from './kursy/form-zapisz-sie/form-zapisz-sie.component';
import {MojeKursyListaComponent} from './kursy/moje-kursy-lista/moje-kursy-lista.component';
import {FooterComponent} from './footer/footer.component';
import {PanelNauczycielaComponent} from './panel-nauczyciela/panel-nauczyciela.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {SlowoNauczycielComponent} from './panel-nauczyciela/slowo-nauczyciel/slowo-nauczyciel.component';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {environment} from './environment/environment';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AngularFireAuthModule} from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
    SlowoComponent,
    SlowaListaComponent,
    DefinicjaComponent,
    DefinicjeListaComponent,
    FormDodajSlowoComponent,
    FormDodajDefinicjeComponent,
    KeysPipePipe,
    NavbarComponent,
    HomeComponent,
    RankingListaComponent,
    KursyComponent,
    FormDodajKursComponent,
    KursyListaComponent,
    KursComponent,
    FormZapiszSieComponent,
    MojeKursyListaComponent,
    FooterComponent,
    PanelNauczycielaComponent,
    SlowoNauczycielComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {
        path: 'kursy/:kurs_id', component: FormDodajSlowoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent},
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'kursy', component: KursyComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'mojekursy', component: MojeKursyListaComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'kursy/:kurs_id/:slowo_id', component: FormDodajDefinicjeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'formularz', component: FormDodajKursComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'zapiszSie/:kurs_id', component: FormZapiszSieComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'panel', component: PanelNauczycielaComponent,
        canActivate: [AuthGuard]
      },

    ]),
    Ng2OrderModule
  ],
  providers: [SlowaService, DefinicjeService, RankingService, KursyService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
