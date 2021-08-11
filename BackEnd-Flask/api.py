from types import resolve_bases

from flask import Flask, Response, request, jsonify, abort

from flask_cors import CORS

from fel import felfact


app = Flask(__name__)


cors = CORS(app,resources={r"/*": {"origin":"*"}})


@app.route('/')

def index():

    return jsonify({'text':'Hello World!'})


@app.route('/gfact', methods=['POST'])

def genfact():

    parse_request = request.data.decode('utf-8')


@app.route('/addlogo', methods=['POST'])

def addlogofact():

    firsttest = felfact()

    firsttest.addlogopdf()

    return jsonify({'text':'Archivo Generado'})

@app.route('/upload', methods=['POST'])

def upload():

    return jsonify({'text':'Hello World!'})






if __name__ == '__main__':

    app.run(port=5002, debug=True)