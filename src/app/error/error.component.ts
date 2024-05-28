import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ErrorComponent {

}
