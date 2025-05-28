from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/convert", methods=["POST"])
def convert():
    # Esempio: ricevi un file e restituisci un json di test
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400
    file = request.files['file']
    # Qui va la tua logica di conversione PDF -> JSON
    return jsonify({"message": "File ricevuto!", "filename": file.filename})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
