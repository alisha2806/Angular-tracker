import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-tracker';
  abc="hello";

  contactForm = new FormGroup({
    firstname: new FormControl(' ',Validators.required),
    lastname: new FormControl()
  })



  onSubmit() {
    console.log(this.contactForm.value);
  }
}
