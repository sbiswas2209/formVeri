import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:any;
  password:any;
  myForm:any;
  Name:any;
  Password:any;
  formBuilder:any;
  constructor(public navCtrl: NavController , public alertCtrl : AlertController) {
this.myForm=new FormGroup({Name: new FormControl(),Password:new FormControl()});
this.formBuilder = new FormBuilder();

  }
  myFunction()
  {
    console.log(this.name);
    console.log(this.password);
    this.myForm = this.formBuilder.group({
      Name:['',Validators.compose([Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*'),Validators.required])],
      Password:['',Validators.compose([Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*'),Validators.required])]
    });
    //this.myAlert();
  }
  /*myAlert()
  {
    const alert=this.alertCtrl.create({
      title: 'Wrong Credentials',
      subTitle : 'Wrong username or password.',
      buttons  : ['OK'] 
     });
     alert.present();
  }*/

  

  }


