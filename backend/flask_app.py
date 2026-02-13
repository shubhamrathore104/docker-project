from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask Docker App is  Running"

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')

    # Process the data (for now, just echo back)
    return jsonify({
        "status": "success",
        "message": f"Received signup for {name}"
    })

if __name__ == '__main__':
    app.run(port=5000, host='0.0.0.0' , debug=True)
