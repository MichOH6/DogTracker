from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route('/date-clicked', methods=['POST'])
def date_clicked():
    data = request.json
    date = data.get('date')
    print(date)
    return jsonify({"message": f"Date {date} clicked!"})

if __name__ == '__main__':
    app.run(debug=True)
