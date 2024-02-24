from flask import Flask

app = Flask(__name__)
help(Flask)
@app.route('/')
def index():
    return 'This is just the beginning'

if __name__ == '__main__':
    app.run(debug=True)
