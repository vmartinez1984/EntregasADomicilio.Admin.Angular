import { Component } from '@angular/core';
import { AutorizacionService } from 'src/app/authorize/authorize.service';
import { InicioDeSesionService } from 'src/app/authorize/inicio-de-sesion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public servicio: AutorizacionService) { }
}
