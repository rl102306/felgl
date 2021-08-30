import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';

import { Router,ActivatedRoute} from '@angular/router'

import { Form, FormBuilder,AbstractControl, FormControl, FormGroup ,Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //private username:any;

  //private password:any;

  public login_form: any;

  public response_token:any;

  public response_login:any;

  public retUrl: string = 'ucf';

  constructor(private _formBuilder: FormBuilder,private utok:UserService,private router: Router, 
    private activatedRoute:ActivatedRoute) {

     }

  ngOnInit(): void {
    
    this.login_form = this._formBuilder.group({

      user:['',Validators.required],
      
      pass:['',Validators.required]

   })

   this.activatedRoute.queryParamMap
                .subscribe(params => {
            this.retUrl != params.get('retUrl'); 
            console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
        });
  }

  


  onSubmitToken() {

    /*const formData = new FormData();
    
    formData.append('username', 'logfel_user_token');

    formData.append('password','Tokenulog2021$$');

    
    this.utok.Token(formData).subscribe(

      (res) => {
    
        this.response_token = res;

        console.log('Vamo a ver 2 : '+ this.response_token);

      },
    
      (err) => {  
    
        //console.log(err);
    
      }
    );*/

    this.response_token = "d5894c0321e4ef7b55b4eac02c027e484167fd97"

    const formDatalogin = new FormData();

    console.log('Hola'+ this.login_form.get('user').value)
  
    formDatalogin.append('username',this.login_form.get('user').value);

    formDatalogin.append('password',this.login_form.get('pass').value);


    this.utok.login(formDatalogin,this.response_token)




  }

}