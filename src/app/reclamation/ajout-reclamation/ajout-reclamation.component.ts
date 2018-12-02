import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReclamationService} from '../../Service/reclamation.service';

@Component({
  selector: 'app-ajout-reclamation',
  templateUrl: './ajout-reclamation.component.html',
  styleUrls: ['./ajout-reclamation.component.css']
})
export class AjoutReclamationComponent implements OnInit {

  constructor(private service: ReclamationService) { }
  reclamation: object;

  submit(event) {
    event.preventDefault();

    // @ts-ignore
    console.log(document.getElementById('idReclamation').value);
    // @ts-ignore
    this.reclamation = {
      idReclamation : document.getElementById('idReclamation').value,
      description : document.getElementById('comment').value,
      etat : document.getElementsByName('etat')[0].value,
      idEquip : document.getElementById('idEquip').value,
      user : 1,
      date_creation : document.getElementById('date_creation').value,
      urgence : document.getElementById('urgence').value
    };
    console.log(this.reclamation);
    this.service.post(this.reclamation).subscribe(res => console.log(res));
  }
  ngOnInit() {
  }

}
