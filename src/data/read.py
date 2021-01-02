import json

data = {}

with open('objects.json', encoding='utf-8') as json_file:
    data = json.load(json_file)
    
for animal in data['lintu']:
  if len(animal['name']) == 6 or len(animal['name']) == 4:
    print(animal['name'])    

