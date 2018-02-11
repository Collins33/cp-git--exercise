#it initializes a python module
#this allows python to recognize the app folder as a module

#import flask
from flask import Flask

#initialize the app
app=Flask(__name__, instance_relative_config=True)

#load the views
from app import views

#load config file
app.config.from_object('config')