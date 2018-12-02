import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrdiserviceService} from '../../Service/ordiservice.service';
import {UtilisateurServiceService} from '../../Service/utilisateur-service.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-ajout-routeur',
  templateUrl: './ajout-routeur.component.html',
  styleUrls: ['./ajout-routeur.component.css']
})
export class AjoutRouteurComponent implements OnInit {
  routeur: Routeur;
  listUtilisateurs: any;
  utilisateur: Utilisateurs;
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;
  constructor(
              private ordiservice: OrdiserviceService, private utilservice: UtilisateurServiceService) {
    this.utilservice.findAllUtilisateurs().subscribe((data: any) => {
      this.listUtilisateurs = data;
      console.log(this.listUtilisateurs);
    });
  }
  public changeSuccessMessage() {
    this._success.next(`${new Date()} - Nouveau routeur ajoutée.`);
  }
  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
    this.routeur = {
      numserie: '',
      marque: '',
      type: '',
      deffectueux: false,
      fingarantie: new Date()
    };
  }

  submit(form: NgForm) {
    console.log(form.value);
    const obj = {...form.value, utilisateur: {'idUtilisateur': form.value.utilisateur}};
    this.ordiservice.create(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
