import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.sass']
})
export class UploadPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  capturarFile(event:any) {

    console.log(event.target.files)


  }

  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

}
