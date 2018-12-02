import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrdinateurComponent} from './ordinateur/ordinateur.component';
import {AjoutOrdinateurComponent} from './ordinateur/ajout-ordinateur/ajout-ordinateur.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OrdiserviceService} from './Service/ordiservice.service';
import {RouteurComponent} from './routeur/routeur.component';
import {AjoutRouteurComponent} from './routeur/ajout-routeur/ajout-routeur.component';
import {ImprimanteComponent} from './imprimante/imprimante.component';
import {AjoutimprimanteComponent} from './imprimante/ajoutimprimante/ajoutimprimante.component';
import {UtilisateurServiceService} from './Service/utilisateur-service.service';
import {INgxSelectOptions, NgxSelectModule} from 'ngx-select-ex';
import {ListerRouteurComponent} from './routeur/lister-routeur/lister-routeur.component';
import {EditRouteurComponent} from './routeur/edit-routeur/edit-routeur.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalModule} from 'ngx-bootstrap/modal';
import { EditImprimanteComponent } from './imprimante/edit-imprimante/edit-imprimante.component';
import { ListerImprimanteComponent } from './imprimante/lister-imprimante/lister-imprimante.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { AjoutReclamationComponent } from './reclamation/ajout-reclamation/ajout-reclamation.component';

const CustomSelectOptions: INgxSelectOptions = {
  optionValueField: 'id',
  optionTextField: 'name',
  keepSelectedItems: true
};

@NgModule({
  declarations: [
    AppComponent,
    OrdinateurComponent,
    AjoutOrdinateurComponent,
    RouteurComponent,
    AjoutRouteurComponent,
    ImprimanteComponent,
    AjoutimprimanteComponent,
    ListerRouteurComponent,
    EditRouteurComponent,
    EditImprimanteComponent,
    ListerImprimanteComponent,
    ReclamationComponent,
    AjoutReclamationComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    NgbModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OrdiserviceService, UtilisateurServiceService],
  bootstrap: [AppComponent],
  entryComponents: [EditRouteurComponent]

})
export class AppModule {
}
