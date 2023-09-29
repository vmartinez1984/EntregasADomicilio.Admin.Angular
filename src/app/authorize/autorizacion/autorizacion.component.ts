import { Component } from '@angular/core';
import { AutorizacionService } from '../authorize.service';

@Component({
  selector: 'app-autorizacion',
  templateUrl: './autorizacion.component.html',
  styleUrls: ['./autorizacion.component.css']
})
export class AutorizacionComponent {
  constructor(public servicio: AutorizacionService) { }
}
