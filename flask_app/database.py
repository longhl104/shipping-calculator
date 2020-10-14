import json
from math import cos, asin, sqrt, pi

# response = requests.get("https://apis.haravan.com/com/countries/#{country_id}/provinces.json")
# print(response.status_code)


def get_provinces():
    return [('Hà Nội', 'HN'), ('TP Hồ Chí Minh', 'HCM'), ('Khác', 'OTHER')]

def distance(lat2, lon2):
    lat1 = -33.91991
    lon1 = 151.03125
    p = pi/180
    a = 0.5 - cos((lat2-lat1)*p)/2 + cos(lat1*p) * \
        cos(lat2*p) * (1-cos((lon2-lon1)*p))/2
    return int(12742 * asin(sqrt(a)))

def get_suburbs():
    ret = []
    with open('data/generated_suburbs.json', encoding="utf8") as f:
        data = json.load(f)
        ret = data['data']
    return ret

################################################################
# HELPER functions below #######################################
################################################################

def generate_suburbs_json():
    ret = {}
    suburbs = []
    with open('data/suburbs.json', encoding="utf8") as f:
        data = json.load(f)
        for entry in data['data']:
            d = {}
            if entry['statistic_area'] == 'Greater Sydney':
                d['suburb'] = entry['suburb']
                d['dist'] = distance(entry['lat'], entry['lng'])
                suburbs += [d]
    
    suburbs = sorted(suburbs, key=lambda i: i['suburb'])
    ret['data'] = suburbs
    with open('data/generated_suburbs.json', 'w') as fp:
        json.dump(ret, fp)


