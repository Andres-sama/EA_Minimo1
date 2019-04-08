import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {BikesService} from "../../services/bikes.service";
import {Bikes} from "../../models/bikes";

@Component({
  selector: 'app-newbike',
  templateUrl: './newbike.component.html',
  styleUrls: ['./newbike.component.css']
})
export class NewbikeComponent implements OnInit {

  newbikeForm: FormGroup;

  validation_messages: any;

  constructor(private newbikeService: BikesService,
              private router: Router, private formBuilder: FormBuilder) {

    this.newbikeForm = this.formBuilder.group({
        name: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{1,40}$/)])),
        address: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/.{1,100}$/)])),
        homePhone: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^((?!(0))[0-9]{9})$/)])),
        mobilePhone: new FormControl('', Validators.compose([
          Validators.required,
          Validators.pattern(/^((?!(0))[0-9]{9})$/)])),
      }
    )
  }

  ngOnInit() {
    this.validation_messages = {
      'name': [
        { type: 'required', message: 'Name is required'},
        { type: 'pattern', message: 'It has to be between 1 and 40 characters long'}
      ],
      'kms': [
        { type: 'required', message: 'kms is required'},
        { type: 'pattern', message: 'It has to be between 1 and 50 characters long'}
      ],
      'description': [
        { type: 'required', message: 'Home phone is required'},
        { type: 'pattern', message: 'It has to be between 1 and 100 characters long'}
      ]
    }
  }

  addBike() {
    console.log(this.newbikeForm.value);
    let bike = new Bikes();
    bike._id = "";
    bike.name = this.newbikeForm.value.name;
    bike.kms = this.newbikeForm.value.address;
    bike.description = this.newbikeForm.value.description;
    this.newbikeService.addBike(bike)
      .subscribe(
        res => {
          console.log(res);
          let token = res['token'];
          localStorage.setItem('token', token);

          this.router.navigateByUrl("");
        },

        err => {
          console.log(err);
          this.handleError(err);
        });

  }

  private handleError(err: HttpErrorResponse) {
    if( err.status == 500 ) {
      alert(err);
    } else if ( err.status == 404 ) {
      alert('404 not found');
    }

  }
}
