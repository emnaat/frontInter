import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {OrdiserviceService} from '../../Service/ordiservice.service';
import {EditRouteurComponent} from '../../routeur/edit-routeur/edit-routeur.component';

@Component({
  selector: 'app-lister-imprimante',
  templateUrl: './lister-imprimante.component.html',
  styleUrls: ['./lister-imprimante.component.css']
})
export class ListerImprimanteComponent implements OnInit {
  imprimantes = [];
  modalRef: BsModalRef;
  id: number;
  constructor(private modalService: BsModalService, private ordiservice: OrdiserviceService) { }
  openModal() {
    this.modalRef = this.modalService.show(EditRouteurComponent, {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }
  ngOnInit() {
    this.ordiservice.getImprimantes().subscribe(data => {
      this.imprimantes = data;
      console.log(data);
    });
  }
  delete(id: number) {
    if (confirm('Are you sure?')) {
      console.log(id);
      this.ordiservice.removeEquip(id).subscribe();
    }
  }
}
