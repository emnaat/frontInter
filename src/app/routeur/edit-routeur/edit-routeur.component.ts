import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrdiserviceService} from '../../Service/ordiservice.service';
import {UtilisateurServiceService} from '../../Service/utilisateur-service.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-routeur',
  templateUrl: './edit-routeur.component.html',
  styleUrls: ['./edit-routeur.component.css']
})
export class EditRouteurComponent implements OnInit {
  id: number;
  routeur: any;
  listUtilisateurs: any;
  utilisateur: Utilisateurs;

  constructor(private router: ActivatedRoute, private ordiservice: OrdiserviceService, private utilservice: UtilisateurServiceService) {
    this.id = this.router.snapshot.params.id;
    this.utilservice.findAllUtilisateurs().subscribe((data: any) => {
      this.listUtilisateurs = data;
      console.log(this.listUtilisateurs);
    });
    this.routeur = {
      numserie: '',
      marque: '',
      type: '',
      deffectueux: false,
      fingarantie: new Date(),
      utilisateur: null,
    };
  }

  ngOnInit() {
    this.ordiservice.findById(this.id).subscribe((data: Routeur) => {
      this.routeur = {
        ...data,
        utilisateur: data.utilisateur ? data.utilisateur.idUtilisateur : null,
      };
    });
  }
  submit(form: NgForm) {
    console.log(form.value);
    const obj = {
      ...form.value,
      utilisateur: {'idUtilisateur': form.value.utilisateur},
      id: parseInt(this.id.toString(), 10)
    };
    this.ordiservice.updateEquip(obj).subscribe((data) => {
      console.log(data);
    });
  }
}
