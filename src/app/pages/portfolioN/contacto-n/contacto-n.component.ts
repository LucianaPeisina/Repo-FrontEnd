import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto-n',
  templateUrl: './contacto-n.component.html',
  styleUrls: ['./contacto-n.component.css']
})
export class ContactoNComponent {
  public myForm: FormGroup;
  name!: string;
  email!: string;
  message!: string;
  sending = false;
  sent = false;
  error = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.myForm.get('name')?.value);
    formData.append('email', this.myForm.get('email')?.value);
    formData.append('message', this.myForm.get('message')?.value);

    axios.post('https://formspree.io/f/mqkjyalv', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  
    // Restablece el formulario después de enviar el correo electrónico
    this.myForm.reset();
  }
}
