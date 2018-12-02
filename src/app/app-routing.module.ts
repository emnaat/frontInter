import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrdinateurComponent} from './ordinateur/ordinateur.component';
import {AjoutOrdinateurComponent} from './ordinateur/ajout-ordinateur/ajout-ordinateur.component';
import {RouteurComponent} from './routeur/routeur.component';
import {AjoutRouteurComponent} from './routeur/ajout-routeur/ajout-routeur.component';
import {ImprimanteComponent} from './imprimante/imprimante.component';
import {ListerRouteurComponent} from './routeur/lister-routeur/lister-routeur.component';
import {EditRouteurComponent} from './routeur/edit-routeur/edit-routeur.component';
import {ListerImprimanteComponent} from './imprimante/lister-imprimante/lister-imprimante.component';
import {AjoutimprimanteComponent} from './imprimante/ajoutimprimante/ajoutimprimante.component';
import {EditImprimanteComponent} from './imprimante/edit-imprimante/edit-imprimante.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import {AjoutReclamationComponent} from './reclamation/ajout-reclamation/ajout-reclamation.component';

const routes: Routes = [
    {
      path: 'ordinateurs',
      component: OrdinateurComponent,
    },
    {
      path: 'ajoutOrdi',
      component: AjoutOrdinateurComponent,
    },
    {
      path: 'routeurs',
      component: RouteurComponent,
      children: [
        {
          path: 'listeRouteur',
          component: ListerRouteurComponent
        },
        {
          path: 'ajouterRouteur',
          component: AjoutRouteurComponent
        },
        {
          path: 'modifier/:id',
          component: EditRouteurComponent
        },
      ]
    },
    {
      path: 'imprimantes',
      component: ImprimanteComponent,
      children: [
        {
          path: 'listeImprimante',
          component: ListerImprimanteComponent
        },
        {
          path: 'ajouterImprimante',
          component: AjoutimprimanteComponent
        },
        {
          path: 'modifierImprimante/:id',
          component: EditImprimanteComponent
        },
      ]
    }, {
    path: 'reclamation',
    component: ReclamationComponent
  }, {
    path: 'ajouter-reclamation',
    component: AjoutReclamationComponent
  }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
