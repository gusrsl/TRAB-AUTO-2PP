import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';


const GET_POSTS_OF_AUTHOR = gql`
query ResultadoExa($medicoId: ID!) {
  medico(id: $medicoId) {
    id
    identificacion
    nombre
    direccion
    telefono
    tipo
    estado
    disponible
  }
}
`;

@Component({
  selector: 'app-records',
  templateUrl: './records.page.html',
  styleUrls: ['./records.page.scss'],
})
export class RecordsPage implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
