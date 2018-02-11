#the app entry point
# we run it to start the flask server
#running it:
# export FLASK_APP=run.py
#flask run



from app import app


if __name__ == '__main__':
    app.run()