people = [
    {"name": "dada", "house" : "baba"},
    {"name": "cho", "house" : "fafa"},
    {"name": "gath", "house" : "baba"}]


people.sort(key=lambda person: person["name"])

print(people)

