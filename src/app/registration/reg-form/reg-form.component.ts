import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {

  registrationForm!: FormGroup;
  public showPassword:boolean=false;
  public showCPassword:boolean=false;

  constructor(private _fb: FormBuilder, private _router: Router, private _ds:DataService) { }

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.pattern]],
      password: ['', [Validators.required, Validators.pattern]],
      cpassword: ['', [Validators.required]]
    })
  }

  submitData() {
    if (this.registrationForm.valid) {
      if(this.registrationForm.value.password===this.registrationForm.value.cpassword){
        let user={
          firstName:this.registrationForm.value.firstname,
          lastName:this.registrationForm.value.lastname,
          phone:this.registrationForm.value.phone,
          email:this.registrationForm.value.email,
          password:this.registrationForm.value.password
        }
        this._ds.setUserDeatils(user,1);
        this._router.navigateByUrl('/secondform');
      }
    }
  }

  togglePassword(){
    this.showPassword=!this.showPassword
  }
  toggleCPassword(){
    this.showCPassword=!this.showCPassword
  }
}
