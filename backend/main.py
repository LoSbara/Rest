from flask import Flask, jsonify, render_template

app = Flask(__name__)

""" @app.route('/hello')
@app.route('/hello/<name>')
def hello(name=None):
    return render_template('hello.html', name=name) """

@app.route('/hello')
@app.route('/hello/<name>')
def hello(name=None):
    return jsonify(name=name)

@app.route('/persorso/')
def root():
    return 'Percorso'

app.run()