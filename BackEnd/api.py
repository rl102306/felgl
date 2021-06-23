from types import resolve_bases

from flask import Flask, Response, request, jsonify, abort

from flask_cors import CORS


app = Flask(__name__)


cors = CORS(app,resources={r"/*": {"origin":"*"}})


@app.route('/')

def index():

    return'<h1>Hola Mundo</h1>'



@app.route('/gfact', methods=['POST'])

def genfact():

    parse_request = request.data.decode('utf-8')













if __name__ == '__main__':

    app.run(port=5000, debug=True)