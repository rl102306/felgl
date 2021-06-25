from django.shortcuts import render, redirect

import requests

# Create your views here.

endpoint = 'http://localhost:5000'

# INDEX

def index(request):
    
    return render(request, 'index.html')

    '''
    if request.method == 'GET':
        req_stats = requests.get('http://localhost:5000/stats')
        context = {
            'output': req_stats.text,
        }
        return render(request, 'index.html', context)
    elif request.method == 'POST':
        document = request.FILES['document']
        data = document.read()
        requests.post('http://localhost:5000/events', data)
        return redirect('index') '''
