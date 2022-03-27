import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import {StepperOrientation} from '@angular/material/stepper';
import { DatePipe } from '@angular/common';
import {map} from 'rxjs/operators';
import { AuthServiceService } from '../Auth/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  companyFormGroup: any;

  token:any

  data:any

  response:any

  userFromGroup: any;

  isEditable = true;

  infoEmail:any;

  stepperOrientation: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder,private companyS:UserService, private Us:UserService,private authService:AuthServiceService,
    
    breakpointObserver: BreakpointObserver) { 

      this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')

      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));
  }
 
  ngOnInit() {

    this.companyFormGroup = this._formBuilder.group({

      name_company:['',Validators.required],

      nit_company:['',Validators.required],
      
      addres_company:['',Validators.required],
      
      slogan_company:['',Validators.required],
      
      c_fact_company:['',Validators.required],
      
      estado_company:['',Validators.required],

      name_file_fact:['',Validators.required]
   })

   this.userFromGroup = this._formBuilder.group({

    name_user:['',Validators.required],
   
    pass:['',Validators.required],
   
    email:['',Validators.required],
   
    username:['',Validators.required]

   })
   

  }



  onChange(event:any) {

    if (event.target.files.length > 0) {
      
      const file = event.target.files[0];
      
      this.companyFormGroup.get('name_file_fact').setValue(file);
      
    
    }
  }

  onNewUser(){

    
    this.authService.token();

    this.token = localStorage.getItem('Token');

    this.data = JSON.parse(this.token).token;

    const formData = new FormData();

    formData.append('firts_name', this.userFromGroup.get('name_user').value);

    formData.append('password', this.userFromGroup.get('pass').value);

    formData.append('email', this.userFromGroup.get('email').value);

    formData.append('username', this.userFromGroup.get('username').value);

    this.Us.newUser(formData,this.data).subscribe(

      (res) => {
    
        this.response = res;
    
        //this.fileurl = `${environment.API_URL_AWS}${res.file}`;
    
        //console.log('Soy yo 1'+ res);

        //this.fileurlback = res.file;
        
        //console.log('Soy yo 2 '+ res.id);
    
        //console.log('Soy yo 3' + this.fileurl);

        alert('Usuario creado.')

       
      },
    
      (err) => {  

        
        alert('Ocurrio un error, intente crearlo de nuevo.')
        
        //console.log('Soy yo' + err);
      }
    );

    this.userFromGroup.reset()


  }

  onNewcompany(){

    
    this.authService.token();
  
    this.token = localStorage.getItem('Token');

    this.data = JSON.parse(this.token).token;

    
    //console.log(this.companyFormGroup.get('name_file_fact').value)

    const formData = new FormData();

    

    formData.append('nombre', this.companyFormGroup.get('name_company').value);
    formData.append('nit', this.companyFormGroup.get('nit_company').value);
    formData.append('direccion', this.companyFormGroup.get('addres_company').value);
    formData.append('slogan', this.companyFormGroup.get('slogan_company').value);
    formData.append('cantidad_facturas_mensual',this.companyFormGroup.get('c_fact_company').value);
    formData.append('estado', this.companyFormGroup.get('estado_company').value);
    formData.append('logo', this.companyFormGroup.get('name_file_fact').value);

    this.companyS.newcompany(formData,this.data).subscribe(

      (res) => {
    
        this.response = res;
    
        //this.fileurl = `${environment.API_URL_AWS}${res.file}`;
    
        //console.log('Soy yo 1'+ res);

        //this.fileurlback = res.file;
        
        //console.log('Soy yo 2 '+ res.id);
    
        //console.log('Soy yo 3' + this.fileurl);

        alert('Empresa creada.')

       
      },
    
      (err) => {  

        
        alert('Ocurrio un error, intente crearla de nuevo.')
        
        //console.log('Soy yo' + err);
      }
    );


    this.companyFormGroup.reset()

  
  }
 
}

