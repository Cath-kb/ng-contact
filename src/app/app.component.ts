import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
})

export class AppComponent {
  title = 'contact-form';
  constructor(private httpClient: HttpClient, router: Router) { }

  router = new Router()

  contactForm = new FormGroup({
    name: new FormControl('aa', [Validators.required, Validators.maxLength(255)]),
    email: new FormControl('b@abc.com', [Validators.required, Validators.email]),
    message: new FormControl('c', Validators.required),
  });

  onSubmit() {
    console.log(this.contactForm.value)
    if (this.contactForm.valid) {
      // TODO: move to app.service
      this.httpClient.post('/api/questions', JSON.stringify(this.contactForm.value))
        .subscribe({
          next: data => {
            console.log('data', data);
            return data;
          },
          error: error => {
            console.log('There was an error!', error);
            this.router.navigate(['/error']);
            return error.message;
          }
        })
      this.contactForm.reset()
    } else {
      console.warn(this.contactForm.value)
    }
  }
}
