from zeep import Client


class felfact:

    
    def newfact():

        client = Client('https://dte.guatefacturas.com/webservices63/feltestSB/Guatefac?WSDL')

        newfact = client.service.generaDocumento()

        print(newfact)