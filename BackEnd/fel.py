import reportlab

from zeep import Client

import io

from reportlab.pdfgen import canvas

from PyPDF2 import PdfFileReader,PdfFileWriter


class felfact:

    
    def newfact():

        client = Client('https://dte.guatefacturas.com/webservices63/feltestSB/Guatefac?WSDL')

        newfact = client.service.generaDocumento()

        print(newfact)
    

    def addlogopdf(self):

        # Creamos un buffer para poder recibir el archivo

        # buffer = io.BytesIO()

        ''' Archivo Origen 
        

        fact = canvas.Canvas('Test-1.pdf')

            # Logo

        # Dibujamos una imagen (IMAGEN, X,Y, WIDTH, HEIGH)
        
        fact.drawImage('lgfirmlogo.jpg', 25, 480, 480, 270)

        # Guardar

        fact.save() '''

        logo = canvas.Canvas('logo.pdf')

        logo.drawImage('lgfirmlogo.jpg', 400, 720, 180, 60)

        logo.save()

        


        logopdf = PdfFileReader(open("logo.pdf","rb"))

        fsatandlogo = PdfFileWriter()

        fsatpdf = PdfFileReader(open("Test1.pdf","rb"))

        cantidad_pag = fsatpdf.getNumPages()

        for num_pagina in range(cantidad_pag):

            print ("Logo page {} of {}".format(num_pagina,cantidad_pag))

            # Union

            fsatpdf_page = fsatpdf.getPage(num_pagina)

            fsatpdf_page.mergePage(logopdf.getPage(0))

            fsatandlogo.addPage(fsatpdf_page)

        
        with open("factlogo.pdf","wb") as outputStream:

            fsatandlogo.write(outputStream)











        print('Hola aca agrego el logo')