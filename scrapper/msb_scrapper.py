import requests
import pandas as pd


url = "https://tygia.vn/ty-gia/msb"

data = pd.read_html(url)

# print(len(data))

table = data[0]

# print(table.columns)

val = table.loc[table['Ngoại tệ'] == 'AUD'].values

mua_ck = val[0][3]
ban_tm = val[0][4]

# print(mua_ck, ban_tm)