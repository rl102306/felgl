import { Component, OnInit } from '@angular/core';

import { UploadService } from '../upload/upload.service';

import {datafile} from '../upload/upload.interface'

import { Form, FormBuilder, FormControl, FormGroup ,Validators } from '@angular/forms';


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

  fourthFromGroup:any;
  
  isEditable = false;

  response: any

  dfile: datafile[] = [];

  DJANGO_SERVER = "http://127.0.0.1:8000";

  fileurl: any;

  filetype: any;

  fileurlback: any;

  direccion:any;

  response_token:any;


  constructor(private _formBuilder: FormBuilder, private uploads:UploadService) {

    
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

    this.fourthFromGroup = this._formBuilder.group({
      //secondCtrl: ['', Validators.required]
    });


  }

  onChange(event:any) {

    if (event.target.files.length > 0) {
      
      const file = event.target.files[0];
      
      this.first_form_group.get('name_file_fact').setValue(file);
      
      console.log('Vamos a ver'+ file)
    
    }
  }

  onSubmit() {

    this.response_token = "d5894c0321e4ef7b55b4eac02c027e484167fd97"

    const formData = new FormData();
    
    formData.append('file', this.first_form_group.get('name_file_fact').value);

    this.uploads.uploadfile(formData,this.response_token).subscribe(

      (res) => {
    
        this.response = res;
    
        this.fileurl = `${this.DJANGO_SERVER}${res.file}`;
    
        //console.log('Soy yo 1'+ res);

        //this.fileurlback = res.file;
        
        //console.log('Soy yo 2 '+ res.id);
    
        //console.log('Soy yo 3' + this.fileurl);

        alert('Archivo cargado.')

       
      },
    
      (err) => {  

        
        alert('Ocurrio un error, intente cargarlo de nuevo.')
        
        //console.log('Soy yo' + err);
      }
    );

  }


  onSubmitfactdir() {

    this.response_token = "d5894c0321e4ef7b55b4eac02c027e484167fd97"

    const formData = new FormData();
    
    formData.append('posicion', this.thirdFormGroup.get('direction').value);

    formData.append('url',this.fileurl);

        
    this.uploads.postfile(formData,this.response_token).subscribe(
      
      (res) => {
    
        this.response = res;
    
        this.fileurlback = `${this.DJANGO_SERVER}${res}`;
        
        //console.log(this.response);

        //console.log(this.fileurlback);

        //this.filerutaback = res.file;
        
        //console.log(res.id);
    
        //console.log(this.fileURL);
      },
    
      (err) => {  
    
        console.log(err);
    
      }
    );
    
  }

}
