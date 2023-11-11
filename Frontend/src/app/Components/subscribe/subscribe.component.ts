import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
 })
 export class SubscribeComponent implements OnInit {
  emailError!: string;
  email!: string;
  subscribeForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) { }
 
  ngOnInit(): void {
     this.subscribeForm = this.formBuilder.group({
       email: ['', [Validators.required, Validators.email]]
     });
  }
 
  onSubmit(): void {
     if (this.subscribeForm.valid) {
       console.log('Subscription successful!', this.subscribeForm.value);
     } else {
       console.log('Form is invalid! Please provide a valid email.');
     }
  }

  validateEmail() {
    const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}$/;
    if (!emailRegex.test(this.email)) {
      this.emailError = 'Please enter a valid email address.';
    } else {
      this.emailError = '';
    }
 }

 }