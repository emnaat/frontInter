import {Component, OnInit} from '@angular/core';
import {OrdiserviceService} from '../Service/ordiservice.service';

@Component({
  selector: 'app-ordinateur',
  templateUrl: './ordinateur.component.html',
  styleUrls: ['./ordinateur.component.css']
})
export class OrdinateurComponent implements OnInit {
  ordinateurs = [];


  constructor(private ordiservice: OrdiserviceService) {
  }

  ngOnInit() {
    this.ordiservice.getEquip().subscribe(data => {
      this.ordinateurs = data;
      console.log(data);

    });
  }
  /* this.ordiservice.getEquip().subscribe((data) => {
     this.ordinateurs = data;
     console.log(data);
   });*/

}
