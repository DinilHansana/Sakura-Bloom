
from flask import Flask
from bot import run_bot
import threading

app = Flask(__name__)

@app.route('/')
def home():
    return 'SakuraBloom Backend Running!'

def start_flask():
    app.run(host='0.0.0.0', port=5500)

if __name__ == '__main__':
    threading.Thread(target=start_flask).start()
    run_bot()
