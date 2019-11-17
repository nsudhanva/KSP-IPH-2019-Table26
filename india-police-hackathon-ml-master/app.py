from flask import Flask, jsonify, request
import scipy.sparse as sparse
import numpy as np
import pandas as pd
import json
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.models import load_model

# http://127.0.0.1:5000/recommend?location_id=1&beat_minutes=20&person_id=10&distance=1000&person_type=1&prev_records=20&no_of_people=3&no_of_cops=2&population=100&hr=10&minu=8&date=21

model = load_model('./model/model.h5')

app = Flask(__name__)

@app.route('/')

def hello():
    return "Hello World!"

@app.route('/recommend', methods=['GET'])

def recommend():
    location_id = request.args.get('location_id')
    person_id = request.args.get('person_id')
    distance = request.args.get('distance')
    beat_minutes = request.args.get('beat_minutes')
    person_type = request.args.get('person_type')
    prev_records = request.args.get('prev_records')
    no_of_people = request.args.get('no_of_people')
    no_of_cops = request.args.get('no_of_cops')
    population = request.args.get('population')
    hr = request.args.get('hr')
    minu = request.args.get('minu')
    date = request.args.get('date')

    X = [location_id, person_id, person_type, distance, prev_records, no_of_people, no_of_cops, population, beat_minutes, hr, minu, date]
    X = [int(i) for i in X]
    print(X)

    try:
        threat_lvl = model.predict(np.array(X).reshape(-1, 12))

        if abs(threat_lvl[0][0]) <= 3:
            description = "Low"
        elif abs(threat_lvl[0][0]) > 3 and abs(threat_lvl[0][0]) < 7:
            description = "Medium"
        else:
            description = "High"


        print(threat_lvl)
        return json.dumps({"threat_lvl": str(abs(threat_lvl[0][0])), "description": description})
    except:
        return json.dumps('error')        

if __name__ == '__main__':
    app.run()

