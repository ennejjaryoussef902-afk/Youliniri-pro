from flask import Flask

app = Flask(__name__)

# Configuration settings
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'your_secret_key'

# Example route
@app.route('/')
def home():
    return 'Welcome to the WhatsApp-like chat application!'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)