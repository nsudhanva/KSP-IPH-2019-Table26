import requests
import json

req_rec_als_1 = requests.get("http://127.0.0.1:5000/recommend", params={'user_id': 1, 'num': 40, 'algo': 'als'})
req_rec_bayes_1 = requests.get("http://127.0.0.1:5000/recommend", params={'user_id': 35, 'num': 40, 'algo': 'bayes'})
req_rel_als_2 = requests.get("http://127.0.0.1:5000/related", params={'assignment_id': 10, 'num': 30, 'algo': 'als'})
req_rel_bayes_2 = requests.get("http://127.0.0.1:5000/related", params={'assignment_id': 30, 'num': 30, 'algo': 'bayes'})

print(req_rec_als_1.status_code, req_rec_als_1.reason)
print(req_rec_bayes_1.status_code, req_rec_bayes_1.reason)
print(req_rel_als_2.status_code, req_rel_als_2.reason)
print(req_rel_bayes_2.status_code, req_rel_bayes_2.reason)

# json_data_rec = json.loads(req_rec.text)
# json_data_rel = json.loads(req_rel.text)

# print(json_data_rec)
# print(json_data_rel)