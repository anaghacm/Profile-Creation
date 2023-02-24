import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {

  secondForm!: FormGroup;
  public countryList!: any;
  public stateList!: any;
  public countryCode!: string;

  constructor(private _fb: FormBuilder, private _ds: DataService, private _router:Router) {
    this.countryList = this._ds.getCountries();
  }

  ngOnInit(): void {
    this.secondForm = this._fb.group({
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      education: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
    this.secondForm.get('country')?.valueChanges.subscribe((country: any) => {
      console.log(this.secondForm.get('country')?.value)
      if (this.secondForm.get('country')?.value == '--Select Country--') {
        this.countryCode = ''
      }
      else {
        for (let country of this.countryList) {
          if (country.name === this.secondForm.get('country')?.value) {
            this.countryCode = country.isoCode;
          }
        }
      }
      if (this.secondForm.get('country')?.value) {
        this.stateList = this._ds.getStatesByCountry(this.countryCode);
      }
    });
  }

  submitPersonalData() {
    if (this.secondForm.valid) {
      let user={
        age:this.secondForm.value.age,
        address:this.secondForm.value.address,
        education:this.secondForm.value.education,
        country:this.secondForm.value.country,
        state:this.secondForm.value.state,
        message:this.secondForm.value.message
      }
      this._ds.setUserDeatils(user,2);
      this._router.navigateByUrl('/dashboard');
    }
  }

}
