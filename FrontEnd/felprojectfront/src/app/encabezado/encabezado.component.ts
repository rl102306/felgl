import { Component, OnInit ,ViewChild,ElementRef } from '@angular/core';

import { jsPDF } from "jspdf";

import html2canvas from 'html2canvas';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.sass']
})
export class EncabezadoComponent implements OnInit {




  links = [
    {
      name: "Inicio",
      url: ""
    },
    {
      name: "Lista",
      url: "list"
    },
    {
      name: "Formulario",
      url: "form"
    }
  ]


 

  ngOnInit(): void {
 
  }

  //@ViewChild('htmlData') htmlData:ElementRef;

  header = [['ID', 'Name', 'Email', 'Profile']]

  tableData = [
      [1, 'John', 'john@yahoo.com', 'HR'],
      [2, 'Angel', 'angel@yahoo.com', 'Marketing'],
      [3, 'Harry', 'harry@yahoo.com', 'Finance'],
      [4, 'Anne', 'anne@yahoo.com', 'Sales'],
      [5, 'Hardy', 'hardy@yahoo.com', 'IT'],
      [6, 'Nikole', 'nikole@yahoo.com', 'Admin'],
      [7, 'Sandra', 'Sandra@yahoo.com', 'Sales'],
      [8, 'Lil', 'lil@yahoo.com', 'Sales']
  ]
  constructor() { 

  }

  public openPDF():void {

   
    /*
    let DATA = document.getElementById('htmlData');
      
    html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('angular-demo.pdf');
    });   */  
  }
}