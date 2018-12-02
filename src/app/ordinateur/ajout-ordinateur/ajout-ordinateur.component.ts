import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {OrdiserviceService} from '../../Service/ordiservice.service';

@Component({
  selector: 'app-ajout-ordinateur',
  templateUrl: './ajout-ordinateur.component.html',
  styleUrls: ['./ajout-ordinateur.component.css']
})
export class AjoutOrdinateurComponent implements OnInit {
  ordinateur: Ordinateur;

  constructor(private ordiservice: OrdiserviceService) {
  }

  ngOnInit() {
    this.ordinateur = {
      type: '',
      numserie: '',
      marque: '',
      processeur: '',
      memoire: '',
      nbrecran: 0,
      fingarantie: new Date()
    };
  }

  submit(form: NgForm) {
    console.log(form.value);
    this.ordiservice.create(form.value).subscribe((data) => {
      console.log(data);
    });
  }

}
