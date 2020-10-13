from flask import *
import configparser
import database

num_pages = 2

user_details = {}  # User details kept for us
session = {}  # Session information (logged in state)
page = {}  # Determines the page information
nav = ['' for _ in range(num_pages)]

app = Flask(__name__)

config = configparser.ConfigParser()
config.read('config.ini')

app.secret_key = config['APP']['secret_key']

def active_nav(index):
    for i in range(num_pages):
        nav[i] = ''
    nav[index] = 'active'

@app.route('/')
def home():
    active_nav(0)
    provinces = database.get_provinces()
    return(render_template('calculator.html', session=session, page=page, nav=nav, provinces=provinces))

@app.route('/')
def transaction():
    active_nav(1)
    return(render_template('transaction.html', session=session, page=page))


@app.route('/sw.js')
def sw():
    response = make_response(
        send_from_directory('static', filename='sw.js'))
    #change the content header file
    response.headers['Content-Type'] = 'application/javascript'
    return response
