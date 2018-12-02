import { Component, OnInit } from '@angular/core';
import {ReclamationService} from '../Service/reclamation.service';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor(private service: ReclamationService) { }

  listRec: object;
  ngOnInit() {
    this.service.listerRec().subscribe( res => {
      this.listRec = res;
    });

  }

}
