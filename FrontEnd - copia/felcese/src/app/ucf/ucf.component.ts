import { Component, OnInit } from '@angular/core';

import { UploadService } from '../upload/upload.service';

import { DatePipe } from '@angular/common';

import {datafile} from '../upload/upload.interface'

import { Form, FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';

import { UserService } from '../user/user.service';

import { Router } from '@angular/router';

import {BreakpointObserver} from '@angular/cdk/layout';

import {StepperOrientation} from '@angular/material/stepper';

import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-ucf',
  templateUrl: './ucf.component.html',
  styleUrls: ['./ucf.component.scss']
})
export class UcfComponent implements OnInit {

  form: any
  
  form_carga:any

  form_fact:any

  first_form_group: any;

  secondFormGroup: any;

  thirdFormGroup:any;

  fourthFormGroup:any;

  fiveFormGroup:any;

  sixFormGroup:any;
  
  isEditable = false;

  response: any

  dfile: datafile[] = [];

  //DJANGO_SERVER = "http://logfelappawsenv.eba-np4mfdst.us-west-2.elasticbeanstalk.com";

  
  fileurl: any;

  filetype: any;

  fileurlback: any;

  direccion:any;

  response_token:any;

  date_c:any;

  latest_date:any;

  appcomponent:any;

  router: any;

  token:any;

  data:any;

  useridjson:any;

  userid:any;

  stepperOrientation: Observable<StepperOrientation>;

  fileurlenv:any;

  hidePdf:any;       // <----- here variable is initialized

  pdfComponent: any;



  constructor(
    
    private _formBuilder: FormBuilder, 
    
    private uploads:UploadService,
    
    private datePipe: DatePipe, private authL: UserService,
    
    private _router: Router,
    
    breakpointObserver: BreakpointObserver) {

      this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')

      .pipe(map(({matches}) => matches ? 'horizontal' : 'vertical'));

      //this.hidePdf = true;


    }



  ngOnInit(): void {
/*
    this.form_carga = this._formBuilder.group({
      name_file_fact:['']
    });
*/
    this.first_form_group = this._formBuilder.group({

       name_file_fact:['',Validators.required]
    })

    this.secondFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
        
      direction: new FormControl()
      //secondCtrl: ['', Validators.required]
    });

    this.fourthFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });

    this.fiveFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });

    this.sixFormGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });



   
  
  }
  
 
  pageRendered() {

    
    this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
   
    setTimeout(() => { this.hidePdf = false;  } , 100 ); // <----- here we are going to show pdf
  }


  onChange(event:any) {

    if (event.target.files.length > 0) {
      
      const file = event.target.files[0];
      
      this.first_form_group.get('name_file_fact').setValue(file);
      
      //console.log('Vamos a ver'+ file)
    
    }
  }

  onSubmit() {

    this.token = localStorage.getItem('Token');

    this.data = JSON.parse(this.token).token;
    
    const formData = new FormData();
    
    formData.append('file', this.first_form_group.get('name_file_fact').value);

    this.uploads.uploadfile(formData,this.data).subscribe(

      (res) => {
    
        this.response = res;

        this.fileurlenv = res.file;
    
        this.fileurl = `${environment.API_URL_LOCAL}${res.file}`;
    

        alert('Archivo cargado.')

       
      },
    
      (err) => {  

        alert('Ocurrio un error, intente cargarlo de nuevo.')

      }
    );

  }


  onSubmitfactdir() {


    //this.date_c = new Date();

    //this.latest_date = this.datePipe.transform(this.date_c,'yyyy-MM-dd')

    
    //this.response_token = "efa7b3b0741567d31fb83f1676c6c7e193d8cc24"

    this.token = localStorage.getItem('Token');

    this.data = JSON.parse(this.token).token;

    this.userid = localStorage.getItem('user_id');
   
     

    const formData = new FormData();
    
    formData.append('posicion', this.thirdFormGroup.get('direction').value);

    formData.append('url',this.fileurlenv);

    formData.append('usuario',this.userid)



    //formData.append('fecha',this.latest_date)

    

        
    this.uploads.postfile(formData,this.data).subscribe(
      
      (res) => {
    
        this.response = res;
    
        this.fileurlback = `${environment.API_URL_LOCAL}${res}`;
        
        alert('Factura generada.')
      },
    
      (err) => {  
    
        //console.log(err);
        alert('Ocurrio un error, intente generar de nuevo su factura.')
      }
    );
    
  }

}
