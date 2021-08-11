import { Component, OnInit } from '@angular/core';

import { UploadService } from 'src/app/upload.service';

import { FormBuilder, FormGroup} from '@angular/forms'


@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.sass']
})
export class UploadPageComponent implements OnInit {

  DJANGO_SERVER = 'http://127.0.0.1:8000'
  
  form: any;

  response: any;
  
  fileURL: any;

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService) { 


  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      profile: ['']
    });

  }

  onChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }

  onSubmit() {

    const formData = new FormData();
    
    formData.append('file', this.form.get('profile').value);

    this.uploadService.upload(formData).subscribe(
    
      (res) => {
    
        this.response = res;
    
        this.fileURL = `${this.DJANGO_SERVER}${res.file}`;
    
        console.log(res);
    
        console.log(this.fileURL);
      },
    
      (err) => {  
    
        console.log(err);
    
      }
    );

  }

  capturarFile(event:any) {

    console.log(event.target.files)

  }

  
  pdfSrc = "assets/pdf/SERVICIOS DE VIAJES Y ENTRETENIMIENTOS, S.A.  Serie 0BC59707 No. 1428573589 - copia - copia.pdf";

  fileName = '';



}
