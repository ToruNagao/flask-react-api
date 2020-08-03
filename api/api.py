import time
from flask import Flask

app=Flask(__name__)

@app.route('/time')
def index():
    return {"time": time.time()}