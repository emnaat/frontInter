import {Component, OnInit} from '@angular/core';
import {OrdiserviceService} from '../../Service/ordiservice.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {EditRouteurComponent} from '../edit-routeur/edit-routeur.component';

@Component({
  selector: 'app-lister-routeur',
  templateUrl: './lister-routeur.component.html',
  styleUrls: ['./lister-routeur.component.css']
})
export class ListerRouteurComponent implements OnInit {
  routeurs = [];
  modalRef: BsModalRef;
  id: number;

  constructor( private modalService: BsModalService, private ordiservice: OrdiserviceService) {
  }

  openModal() {
    this.modalRef = this.modalService.show(EditRouteurComponent, {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }

  ngOnInit() {
    this.ordiservice.getRouteur().subscribe(data => {
      this.routeurs = data;
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
