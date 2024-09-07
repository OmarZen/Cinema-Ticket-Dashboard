import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash , faCopy} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FontAwesomeModule, QRCodeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPencil, faTrash, faCopy);
  }
}
