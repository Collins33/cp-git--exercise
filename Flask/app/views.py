#contains all the routes and the functions to render html

from app import app
from flask import render_template

@app.route('/')
def index():
    return render_template("index.html")
