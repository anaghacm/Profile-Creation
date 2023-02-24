import { Injectable } from '@angular/core';
import { Country, State } from 'country-state-city';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public userDetails = {
    firstName:'Anagha',
    lastName: 'Prajeesh',
    phone: '',
    email: '',
    password: '',
    age: 0,
    address: '',
    education: '',
    country: '',
    state: '',
    message: ''
  }

  constructor() { }

  getCountries() {
    return Country.getAllCountries();
  }

  getStatesByCountry(countryCode: string) {
    return State.getStatesOfCountry(countryCode)
  }

  setUserDeatils(user: any, formNumber: number) {
    if (formNumber === 1) {
      this.userDetails.firstName = user.firstName;
      this.userDetails.lastName = user.lastName;
      this.userDetails.phone = user.phone;
      this.userDetails.email = user.email;
      this.userDetails.password = user.password;
    }
    else if (formNumber === 2) {
      this.userDetails.age= user.age;
      this.userDetails.address= user.address;
      this.userDetails.education= user.education;
      this.userDetails.country= user.country;
      this.userDetails.state= user.state;
      this.userDetails.message= user.message;
    }
  }

  getUserDetails() {
    return this.userDetails;
  }
}
