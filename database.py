import requests
import json

# response = requests.get("https://apis.haravan.com/com/countries/#{country_id}/provinces.json")
# print(response.status_code)

# with open('data/local.json', encoding="utf8") as f:
#     data = json.load(f)

def get_provinces():
    return ['Hà Nội', 'TP Hồ Chí Minh', 'Khác']