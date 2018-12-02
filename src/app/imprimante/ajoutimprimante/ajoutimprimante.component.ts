import {Component, OnInit} from '@angular/core';
import Imprimante from '../../../Model/Imprimante';
import {Subject} from 'rxjs';
import {OrdiserviceService} from '../../Service/ordiservice.service';
import {UtilisateurServiceService} from '../../Service/utilisateur-service.service';
import {debounceTime} from 'rxjs/operators';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-ajoutimprimante',
  templateUrl: './ajoutimprimante.component.html',
  styleUrls: ['./ajoutimprimante.component.css']
})
export class AjoutimprimanteComponent implements OnInit {
  imprimante: Imprimante;
  listUtilisateurs: any;
  utilisateur: Utilisateurs;
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor(private ordiservice: OrdiserviceService, private utilservice: UtilisateurServiceService) {
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
    this.imprimante = {
      numserie: '',
      marque: '',
      type: '',
      deffectueux: false,
      fingarantie: new Date(),
      cartouche: ''
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
